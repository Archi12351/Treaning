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

import { GRAMMAR_TOPICS as GRAMMAR_FR } from "./fr/grammar";
import { TOPICS as VOCAB_TOPICS_FR, VOCABULARY as VOCABULARY_FR } from "./fr/vocabulary";
import { TEXTBOOK_CHAPTERS as TEXTBOOK_CHAPTERS_FR, TEXTBOOK_PARAGRAPHS as TEXTBOOK_PARAGRAPHS_FR } from "./fr/textbook";
import { CONVERSATIONS as CONVERSATIONS_FR } from "./fr/conversations";
import { PLACEMENT_QUESTIONS as PLACEMENT_FR } from "./fr/placement";

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

// Partial so a future language can be registered before its content exists —
// the switcher only offers languages present in this record.
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
  fr: {
    meta: {
      code: "fr",
      label: "Французский",
      flag: "🇫🇷",
      speechLang: "fr-FR",
      previewPhrase: "Bonjour, voici comment sonne cette voix.",
    },
    grammarTopics: GRAMMAR_FR,
    vocabTopics: VOCAB_TOPICS_FR,
    vocabulary: VOCABULARY_FR,
    textbookChapters: TEXTBOOK_CHAPTERS_FR,
    textbookParagraphs: TEXTBOOK_PARAGRAPHS_FR,
    conversations: CONVERSATIONS_FR,
    placementQuestions: PLACEMENT_FR,
  },
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
