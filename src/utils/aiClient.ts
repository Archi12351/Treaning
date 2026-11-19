import type { CEFRLevel, Language } from "../types";

// Small fetch-based client for one-shot AI tasks (writing feedback, checking a
// free answer). Uses the shared backend when configured (with a prompt built
// on the server), otherwise the learner's own Anthropic or Gemini key.

const BACKEND_URL = import.meta.env.VITE_AI_BACKEND_URL as string | undefined;
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models";

export interface AIConfig {
  provider: "claude" | "gemini";
  apiKey: string;
  model: string;
  geminiApiKey: string;
  geminiModel: string;
}

const LANG_NAME: Record<Language, string> = { de: "German", en: "English", fr: "French" };

export function writingFeedbackPrompt(language: Language, level: CEFRLevel, task: string, text: string): string {
  return [
    `You are an experienced, encouraging ${LANG_NAME[language]} teacher for Russian-speaking learners. The learner's level is ${level} (CEFR).`,
    `Task given to the learner (in Russian): "${task}"`,
    `Learner's text:\n"""${text.slice(0, 2500)}"""`,
    `Evaluate it. Reply with ONLY a JSON object, no markdown:`,
    `{"score": <0-100, how well the task is solved for level ${level}>,`,
    ` "estimatedLevel": "<A1|A2|B1|B2|C1|C2>",`,
    ` "corrected": "<the learner's text with all mistakes corrected, minimal changes>",`,
    ` "mistakes": [{"wrong": "<fragment>", "right": "<correction>", "why": "<short explanation in Russian>"}],`,
    ` "praise": "<one sentence in Russian: what is good>",`,
    ` "tips": ["<up to 3 short tips in Russian how to improve>"],`,
    ` "model": "<a natural, native-like version of the text at level ${level}>"}`,
    `List at most 8 most important mistakes. If there are no mistakes, return an empty array.`,
  ].join("\n");
}

export function answerCheckPrompt(
  language: Language,
  context: string,
  expected: string,
  answer: string,
): string {
  return [
    `You check answers in a ${LANG_NAME[language]} speaking exercise for Russian-speaking learners.`,
    `Dialogue context (previous line said to the learner): "${context}"`,
    `Model answer: "${expected}"`,
    `Learner said (speech-to-text, may lack punctuation): "${answer.slice(0, 500)}"`,
    `Is the learner's answer an appropriate, understandable reply in this situation (it does NOT need to match the model answer word for word)?`,
    `Reply with ONLY JSON: {"ok": true|false, "feedback": "<one short sentence in Russian; if there is a grammar mistake, show the corrected sentence>"}`,
  ].join("\n");
}

async function viaBackend(body: Record<string, unknown>): Promise<string> {
  const res = await fetch(BACKEND_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data: { text?: string; error?: string } = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Сервер ответил ошибкой (${res.status}).`);
  return data.text ?? "";
}

async function viaAnthropic(prompt: string, cfg: AIConfig, maxTokens: number): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": cfg.apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({ model: cfg.model, max_tokens: maxTokens, messages: [{ role: "user", content: prompt }] }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 401) throw new Error("Неверный API-ключ Anthropic.");
    if (res.status === 429) throw new Error("Превышен лимит запросов. Попробуйте чуть позже.");
    throw new Error(data?.error?.message || `Ошибка API (${res.status}).`);
  }
  return (data.content ?? []).find((b: { type: string }) => b.type === "text")?.text ?? "";
}

async function viaGemini(prompt: string, cfg: AIConfig, maxTokens: number): Promise<string> {
  const res = await fetch(`${GEMINI_URL}/${cfg.geminiModel}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": cfg.geminiApiKey },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: maxTokens, responseMimeType: "application/json" },
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 400 || res.status === 403) throw new Error("Неверный API-ключ Gemini.");
    if (res.status === 429) throw new Error("Превышен лимит запросов Gemini.");
    throw new Error(data?.error?.message || `Ошибка Gemini (${res.status}).`);
  }
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

export function parseJsonObject<T>(text: string): T {
  const cleaned = text.replace(/```(?:json)?/gi, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end <= start) throw new Error("ИИ вернул ответ в неожиданном формате.");
  return JSON.parse(cleaned.slice(start, end + 1)) as T;
}

// kind + params are what the backend needs to rebuild the same prompt server-side.
export async function runAITask(
  cfg: AIConfig,
  prompt: string,
  backendBody: Record<string, unknown>,
  maxTokens = 1500,
): Promise<string> {
  if (cfg.provider === "gemini") {
    if (!cfg.geminiApiKey) throw new Error("Не задан API-ключ Gemini.");
    return viaGemini(prompt, cfg, maxTokens);
  }
  if (BACKEND_URL) return viaBackend({ mode: "task", model: cfg.model, ...backendBody });
  if (!cfg.apiKey) throw new Error("Не задан API-ключ Anthropic.");
  return viaAnthropic(prompt, cfg, maxTokens);
}
