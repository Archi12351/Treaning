import type { CEFRLevel } from "../../types";

export interface ReadingQuestion {
  q: string;
  options: string[];
  answer: string;
}

export interface ReadingText {
  id: string;
  level: CEFRLevel;
  icon: string;
  title: string;
  ru: string;
  // "official" — письма и тексты из ведомств, которые приходится читать после переезда.
  category?: "official";
  paragraphs: string[];
  glossary: { de: string; ru: string }[];
  questions: ReadingQuestion[];
}

// Компактная запись глоссария: "слово = перевод; слово = перевод".
export function gloss(raw: string): { de: string; ru: string }[] {
  return raw
    .split(";")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const [de, ru] = p.split("=").map((x) => x.trim());
      return { de, ru };
    });
}

// Компактная запись вопросов: "Вопрос? | вариант ~ вариант ~ вариант | ответ" — по строке.
export function questions(raw: string): ReadingQuestion[] {
  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.includes("|"))
    .map((l) => {
      const [q, opts, answer] = l.split("|").map((p) => p.trim());
      return { q, options: opts.split("~").map((o) => o.trim()), answer };
    });
}
