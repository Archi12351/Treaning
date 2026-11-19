import type { Language } from "../types";
import type { CultureCountry, CultureFact } from "../data/facts";

// Generates fresh culture/everyday-life facts with whichever AI provider the
// learner configured (shared Claude backend, own Anthropic key, or own Gemini
// key). Uses plain fetch on purpose so the Culture screen does not pull the
// Anthropic SDK into its bundle.

const BACKEND_URL = import.meta.env.VITE_AI_BACKEND_URL as string | undefined;
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models";

export interface AIFactsConfig {
  provider: "claude" | "gemini";
  apiKey: string;
  model: string;
  geminiApiKey: string;
  geminiModel: string;
}

const LANGUAGE_NAMES: Record<Language, string> = {
  de: "немецкий",
  en: "английский",
  fr: "французский",
};

// Rotating themes keep successive batches varied instead of the model
// returning the same "Oktoberfest / Big Ben" trivia every time.
const THEMES = [
  "бытовые привычки и этикет",
  "бюрократия и госуслуги для иностранцев (документы, ВНЖ, налоги, страховка)",
  "работа, зарплаты и трудовая культура",
  "еда, кухня и традиции застолья",
  "история и известные события",
  "язык: диалекты, сленг, необычные слова и выражения",
  "праздники и фестивали",
  "образование и университеты",
  "транспорт, города и жильё",
  "наука, изобретения и известные люди",
  "природа, география и рекорды",
  "законы и правила, которые удивляют иностранцев",
];

export function buildFactsPrompt(
  language: Language,
  countries: CultureCountry[],
  existingTitles: string[],
  count: number,
): string {
  const theme = THEMES[Math.floor(Math.random() * THEMES.length)];
  const secondTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
  const countryList = countries.map((c) => `${c.name} (${c.flag})`).join(", ");
  const avoid = existingTitles.slice(-80).join("; ");
  return [
    `Ты автор раздела «Культура и факты» в приложении для изучения языка (${LANGUAGE_NAMES[language]}). Пользователи — русскоязычные.`,
    `Напиши ${count} новых, интересных и ПРОВЕРЕННЫХ фактов о странах: ${countryList}.`,
    `Темы этой подборки: «${theme}» и «${secondTheme}», но можно и другие, если факт действительно интересен.`,
    `Распредели факты по разным странам из списка. Пиши только то, в чём уверен; никаких выдуманных цифр — если точной цифры не знаешь, пиши без неё.`,
    `Полезно добавлять практические детали для переехавших (как что устроено, как называется по-местному).`,
    avoid ? `НЕ повторяй уже существующие факты с такими заголовками: ${avoid}.` : "",
    `Ответ — ТОЛЬКО JSON-массив без пояснений и без markdown, формат элемента:`,
    `{"country": "<название страны ровно как в списке, без флага>", "title": "<заголовок до 6 слов, по-русски>", "text": "<1–3 предложения по-русски>"}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function extractJsonArray(text: string): unknown[] {
  const cleaned = text.replace(/```(?:json)?/gi, "").trim();
  const start = cleaned.indexOf("[");
  const end = cleaned.lastIndexOf("]");
  if (start === -1 || end <= start) throw new Error("Ответ ИИ не содержит списка фактов.");
  const parsed = JSON.parse(cleaned.slice(start, end + 1));
  if (!Array.isArray(parsed)) throw new Error("Ответ ИИ не является списком.");
  return parsed;
}

export function parseFacts(
  text: string,
  countries: CultureCountry[],
  language: Language,
): CultureFact[] {
  const raw = extractJsonArray(text);
  const byName = new Map(countries.map((c) => [c.name.toLowerCase(), c]));
  const stamp = Date.now().toString(36);
  const facts: CultureFact[] = [];
  raw.forEach((item, i) => {
    if (!item || typeof item !== "object") return;
    const { country, title, text: body } = item as Record<string, unknown>;
    if (typeof title !== "string" || typeof body !== "string") return;
    const name = typeof country === "string" ? country.replace(/\p{Extended_Pictographic}|\p{Regional_Indicator}/gu, "").trim() : "";
    const match = byName.get(name.toLowerCase()) ?? countries[0];
    facts.push({
      id: `ai-${language}-${stamp}-${i}`,
      country: match.name,
      flag: match.flag,
      title: title.trim().slice(0, 80),
      text: body.trim().slice(0, 600),
      ai: true,
    });
  });
  if (facts.length === 0) throw new Error("ИИ вернул пустой список фактов.");
  return facts;
}

// The shared backend builds the prompt itself (server/worker.js) from the
// language + titles to avoid, so the proxy can't be used as a free-form LLM.
async function viaBackend(
  language: Language,
  existingTitles: string[],
  count: number,
  model: string,
): Promise<string> {
  const res = await fetch(BACKEND_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mode: "facts",
      language,
      existingTitles: existingTitles.slice(-80),
      count,
      model,
    }),
  });
  const data: { text?: string; error?: string } = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Сервер ответил ошибкой (${res.status}).`);
  return data.text ?? "";
}

async function viaAnthropic(prompt: string, apiKey: string, model: string): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model,
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 401) throw new Error("Неверный API-ключ Anthropic. Проверьте его в настройках.");
    if (res.status === 429) throw new Error("Превышен лимит запросов. Попробуйте чуть позже.");
    throw new Error(data?.error?.message || `Ошибка API (${res.status}).`);
  }
  const block = (data.content ?? []).find((b: { type: string }) => b.type === "text");
  return block?.text ?? "";
}

async function viaGemini(prompt: string, apiKey: string, model: string): Promise<string> {
  const res = await fetch(`${GEMINI_URL}/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 2000, responseMimeType: "application/json" },
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 400 || res.status === 403) throw new Error("Неверный API-ключ Gemini. Проверьте его в настройках.");
    if (res.status === 429) throw new Error("Превышен лимит запросов Gemini. Попробуйте чуть позже.");
    throw new Error(data?.error?.message || `Ошибка Gemini (${res.status}).`);
  }
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

export async function generateFacts(
  config: AIFactsConfig,
  language: Language,
  countries: CultureCountry[],
  existingTitles: string[],
  count = 6,
): Promise<CultureFact[]> {
  const prompt = buildFactsPrompt(language, countries, existingTitles, count);
  let text: string;
  if (config.provider === "gemini") {
    if (!config.geminiApiKey) throw new Error("Не задан API-ключ Gemini.");
    text = await viaGemini(prompt, config.geminiApiKey, config.geminiModel);
  } else if (BACKEND_URL) {
    text = await viaBackend(language, existingTitles, count, config.model);
  } else {
    if (!config.apiKey) throw new Error("Не задан API-ключ Anthropic.");
    text = await viaAnthropic(prompt, config.apiKey, config.model);
  }
  const seen = new Set(existingTitles.map((t) => t.toLowerCase()));
  return parseFacts(text, countries, language).filter((f) => !seen.has(f.title.toLowerCase()));
}
