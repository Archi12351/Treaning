import { useCallback, useRef, useState } from "react";
import Anthropic from "@anthropic-ai/sdk";
import type { AIChatMessage, CEFRLevel } from "../types";

// When set (build-time env var), the app talks to a server-side proxy
// instead of calling the Anthropic API directly from the browser — no
// per-user API key needed. See server/README.md for how to deploy one.
// The backend currently only proxies Claude; Gemini is always BYOK.
const BACKEND_URL = import.meta.env.VITE_AI_BACKEND_URL;

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models";

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

export type AIProvider = "claude" | "gemini";

interface UseAIChatConfig {
  provider: AIProvider;
  apiKey: string;
  model: string;
  geminiApiKey: string;
  geminiModel: string;
  level: CEFRLevel;
  topic: string;
}

export function useAIChat({
  provider,
  apiKey,
  model,
  geminiApiKey,
  geminiModel,
  level,
  topic,
}: UseAIChatConfig) {
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

  const sendViaGemini = useCallback(
    async (history: AIChatMessage[]): Promise<SendResult> => {
      if (!geminiApiKey) return { ok: false, error: "Не задан API-ключ Gemini." };
      try {
        const res = await fetch(`${GEMINI_URL}/${geminiModel}:generateContent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": geminiApiKey,
          },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: buildSystemPrompt(level, topic) }] },
            contents: history.map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.text }],
            })),
            generationConfig: { maxOutputTokens: 400 },
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          const status = res.status;
          let error = data?.error?.message || `Сервер Gemini ответил ошибкой (${status}).`;
          if (status === 400 || status === 403) error = "Неверный API-ключ Gemini. Проверьте его в настройках.";
          else if (status === 429) error = "Превышен лимит запросов Gemini. Попробуйте чуть позже.";
          return { ok: false, error };
        }
        const reply: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
        setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
        return { ok: true };
      } catch {
        return { ok: false, error: "Не удалось подключиться к Gemini API. Проверьте интернет-соединение." };
      }
    },
    [geminiApiKey, geminiModel, level, topic],
  );

  const send = useCallback(
    async (userText: string): Promise<SendResult> => {
      const history = [...messages, { role: "user" as const, text: userText }];
      setMessages(history);
      setLoading(true);
      try {
        if (provider === "gemini") return await sendViaGemini(history);
        return BACKEND_URL ? await sendViaBackend(history) : await sendViaOwnKey(history);
      } finally {
        setLoading(false);
      }
    },
    [messages, provider, sendViaBackend, sendViaOwnKey, sendViaGemini],
  );

  const reset = useCallback(() => setMessages([]), []);

  return { messages, loading, send, reset };
}
