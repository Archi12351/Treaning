import type {
  ConversationTopic,
  GrammarTopic,
  Language,
  LanguageMeta,
  PlacementQuestion,
  TextbookChapter,
  TextbookParagraph,
  VocabItem,
  CEFRLevel,
} from "../types";

import { GRAMMAR_TOPICS as GRAMMAR_DE } from "./grammar";
import { TOPICS as VOCAB_TOPICS_DE, VOCABULARY as VOCABULARY_DE } from "./vocabulary";
import { TEXTBOOK_CHAPTERS as TEXTBOOK_CHAPTERS_DE, TEXTBOOK_PARAGRAPHS as TEXTBOOK_PARAGRAPHS_DE } from "./textbook";
import { CONVERSATIONS as CONVERSATIONS_DE } from "./conversations";
import { PLACEMENT_QUESTIONS as PLACEMENT_DE } from "./placement";

import { GRAMMAR_TOPICS as GRAMMAR_EN } from "./en/grammar";
import { TOPICS as VOCAB_TOPICS_EN, VOCABULARY as VOCABULARY_EN } from "./en/vocabulary";
import { TEXTBOOK_CHAPTERS as TEXTBOOK_CHAPTERS_EN, TEXTBOOK_PARAGRAPHS as TEXTBOOK_PARAGRAPHS_EN } from "./en/textbook";
import { CONVERSATIONS as CONVERSATIONS_EN } from "./en/conversations";
import { PLACEMENT_QUESTIONS as PLACEMENT_EN } from "./en/placement";

export interface VocabTopicMeta {
  id: string;
  title: string;
  ru: string;
  level: CEFRLevel;
}

export interface LanguageBundle {
  meta: LanguageMeta;
  grammarTopics: GrammarTopic[];
  vocabTopics: VocabTopicMeta[];
  vocabulary: VocabItem[];
  textbookChapters: TextbookChapter[];
  textbookParagraphs: TextbookParagraph[];
  conversations: ConversationTopic[];
  placementQuestions: PlacementQuestion[];
}

// Partial: only languages with a real content bundle appear here. "fr" is
// deliberately absent until its content is written — see LANGUAGE_LIST below.
export const LANGUAGES: Partial<Record<Language, LanguageBundle>> = {
  de: {
    meta: {
      code: "de",
      label: "Немецкий",
      flag: "🇩🇪",
      speechLang: "de-DE",
      previewPhrase: "Hallo, so klingt diese Stimme.",
    },
    grammarTopics: GRAMMAR_DE,
    vocabTopics: VOCAB_TOPICS_DE,
    vocabulary: VOCABULARY_DE,
    textbookChapters: TEXTBOOK_CHAPTERS_DE,
    textbookParagraphs: TEXTBOOK_PARAGRAPHS_DE,
    conversations: CONVERSATIONS_DE,
    placementQuestions: PLACEMENT_DE,
  },
  en: {
    meta: {
      code: "en",
      label: "Английский",
      flag: "🇬🇧",
      speechLang: "en-US",
      previewPhrase: "Hello, this is what this voice sounds like.",
    },
    grammarTopics: GRAMMAR_EN,
    vocabTopics: VOCAB_TOPICS_EN,
    vocabulary: VOCABULARY_EN,
    textbookChapters: TEXTBOOK_CHAPTERS_EN,
    textbookParagraphs: TEXTBOOK_PARAGRAPHS_EN,
    conversations: CONVERSATIONS_EN,
    placementQuestions: PLACEMENT_EN,
  },
  // French content is not written yet — the language switcher only offers
  // languages present in this record, so "fr" simply won't show up in the
  // UI until a bundle is added here.
};

export const LANGUAGE_LIST: LanguageMeta[] = Object.values(LANGUAGES).map(
  (l) => (l as LanguageBundle).meta,
);

// Always returns a real bundle — falls back to German if the requested
// language has no content yet (defends against a stale/unexpected value in
// localStorage rather than crashing every screen that reads this).
export function getLanguageBundle(language: Language): LanguageBundle {
  return LANGUAGES[language] ?? (LANGUAGES.de as LanguageBundle);
}
