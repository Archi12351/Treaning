import { useCallback, useRef, useState } from "react";
import Anthropic from "@anthropic-ai/sdk";
import type { AIChatMessage, CEFRLevel } from "../types";

// When set (build-time env var), the app talks to a server-side proxy
// instead of calling the Anthropic API directly from the browser — no
// per-user API key needed. See server/README.md for how to deploy one.
const BACKEND_URL = import.meta.env.VITE_AI_BACKEND_URL;

function buildSystemPrompt(level: CEFRLevel, topic: string): string {
  return [
    `Du bist ein freundlicher deutscher Muttersprachler und Gesprächspartner in einer Sprachlern-App.`,
    `Der Lernende hat das Sprachniveau ${level} (GER/CEFR). Passe Wortschatz, Satzlänge und Tempo an dieses Niveau an.`,
    `Führe ein natürliches, alltagsnahes Gespräch zum Thema: "${topic}". Stelle Rückfragen, damit das Gespräch weitergeht.`,
    `Antworte IMMER auf Deutsch, in 1-3 kurzen Sätzen (das wird laut vorgelesen, also keine Emojis, keine Sternchen, keine Aufzählungen).`,
    `Wenn der Lernende einen klaren Grammatik- oder Wortfehler macht, korrigiere ihn kurz und freundlich in Klammern auf Russisch, dann führe das Gespräch normal auf Deutsch weiter. Korrigiere nicht bei jedem Satz - nur bei echten Fehlern.`,
    `Bleib immer in der Rolle des Gesprächspartners, auch wenn nach etwas anderem gefragt wird.`,
  ].join(" ");
}

interface SendResult {
  ok: boolean;
  error?: string;
}

export function useAIChat(apiKey: string, model: string, level: CEFRLevel, topic: string) {
  const [messages, setMessages] = useState<AIChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const clientRef = useRef<Anthropic | null>(null);

  const getClient = useCallback(() => {
    if (!clientRef.current || clientRef.current.apiKey !== apiKey) {
      clientRef.current = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
    }
    return clientRef.current;
  }, [apiKey]);

  const sendViaBackend = useCallback(
    async (history: AIChatMessage[]): Promise<SendResult> => {
      try {
        const res = await fetch(BACKEND_URL as string, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history, level, topic, model }),
        });
        const data: { text?: string; error?: string } = await res.json();
        if (!res.ok) {
          return { ok: false, error: data.error || `Сервер ответил ошибкой (${res.status}).` };
        }
        setMessages((prev) => [...prev, { role: "assistant", text: data.text ?? "" }]);
        return { ok: true };
      } catch {
        return { ok: false, error: "Не удалось подключиться к серверу." };
      }
    },
    [level, model, topic],
  );

  const sendViaOwnKey = useCallback(
    async (history: AIChatMessage[]): Promise<SendResult> => {
      if (!apiKey) return { ok: false, error: "Не задан API-ключ." };
      try {
        const client = getClient();
        const response = await client.messages.create({
          model,
          max_tokens: 400,
          system: buildSystemPrompt(level, topic),
          messages: history.map((m) => ({ role: m.role, content: m.text })),
        });
        const textBlock = response.content.find((b) => b.type === "text");
        const reply = textBlock && textBlock.type === "text" ? textBlock.text : "";
        setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
        return { ok: true };
      } catch (err) {
        let error = "Не удалось получить ответ.";
        if (err instanceof Anthropic.AuthenticationError) {
          error = "Неверный API-ключ. Проверьте его в настройках.";
        } else if (err instanceof Anthropic.RateLimitError) {
          error = "Превышен лимит запросов. Попробуйте чуть позже.";
        } else if (err instanceof Anthropic.APIConnectionError) {
          error = "Не удалось подключиться к api.anthropic.com. Проверьте интернет-соединение.";
        } else if (err instanceof Anthropic.APIError) {
          error = `Ошибка API (${err.status}): ${err.message}`;
        } else if (err instanceof Error) {
          error = err.message;
        }
        return { ok: false, error };
      }
    },
    [apiKey, getClient, level, topic, model],
  );

  const send = useCallback(
    async (userText: string): Promise<SendResult> => {
      const history = [...messages, { role: "user" as const, text: userText }];
      setMessages(history);
      setLoading(true);
      try {
        return BACKEND_URL ? await sendViaBackend(history) : await sendViaOwnKey(history);
      } finally {
        setLoading(false);
      }
    },
    [messages, sendViaBackend, sendViaOwnKey],
  );

  const reset = useCallback(() => setMessages([]), []);

  return { messages, loading, send, reset };
}
