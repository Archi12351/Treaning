export type CEFRLevel = "A2" | "B1" | "B2" | "C1" | "C2";

export interface VocabItem {
  id: string;
  de: string;
  ru: string;
  exampleDe: string;
  exampleRu: string;
  topic: string;
  level: CEFRLevel;
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
