export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

// Which language the app is teaching right now. Field names below (de/exampleDe)
// predate multi-language support and always hold the TARGET language's text —
// German when language === "de", English when "en", French when "fr" — while
// ru/exampleRu always hold the Russian translation, regardless of target.
export type Language = "de" | "en" | "fr";

export interface LanguageMeta {
  code: Language;
  label: string;
  flag: string;
  speechLang: string;
  previewPhrase: string;
}

export interface VocabItem {
  id: string;
  de: string;
  ru: string;
  exampleDe: string;
  exampleRu: string;
  topic: string;
  level: CEFRLevel;
  emoji?: string;
}

export type ExerciseType = "choice" | "fill" | "reorder" | "transform";

export interface Exercise {
  id: string;
  type: ExerciseType;
  level: CEFRLevel;
  prompt: string;
  hint?: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: CEFRLevel;
  summary: string;
  explanation: string[];
  examples: { de: string; ru: string }[];
  exercises: Exercise[];
}

export interface DialogueLine {
  speaker: "bot" | "user";
  de: string;
  ru: string;
  alternatives?: string[];
}

export interface ConversationTopic {
  id: string;
  title: string;
  ru: string;
  level: CEFRLevel;
  icon: string;
  avatar: string;
  lines: DialogueLine[];
}

export interface PlacementQuestion {
  id: string;
  level: CEFRLevel;
  prompt: string;
  options: string[];
  answer: string;
}

export interface SRSCard {
  repetition: number;
  interval: number;
  easeFactor: number;
  dueDate: string;
  lastGrade?: number;
  seen: number;
  correct: number;
}

export type Grade = 0 | 1 | 2 | 3;

export interface TextbookTable {
  headers: string[];
  rows: string[][];
}

export interface TextbookParagraph {
  id: string;
  number: string;
  chapterId: string;
  title: string;
  level: CEFRLevel;
  body: string[];
  examples?: { de: string; ru: string }[];
  exceptions?: string[];
  table?: TextbookTable;
}

export interface TextbookChapter {
  id: string;
  number: number;
  title: string;
  levelRange: string;
}

export interface AIChatMessage {
  role: "user" | "assistant";
  text: string;
}
