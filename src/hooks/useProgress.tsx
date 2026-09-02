import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CEFRLevel, Grade, Language, SRSCard } from "../types";
import { createCard, reviewCard } from "../utils/srs";

const STORAGE_KEY = "deutsch-b2c1-progress-v1";

interface GrammarProgress {
  completed: string[];
  correct: number;
  attempts: number;
}

// Everything that's genuinely per-language: which level you're at in THAT
// language, which words/exercises/chapters/dialogues you've done in it.
interface LangProgress {
  level: CEFRLevel;
  levelConfidence: number;
  placementDone: boolean;
  placementHistory: { date: string; level: CEFRLevel; score: number }[];
  vocabCards: Record<string, SRSCard>;
  grammarProgress: Record<string, GrammarProgress>;
  conversationsDone: string[];
  chaptersRead: string[];
}

const defaultLangProgress: LangProgress = {
  level: "A1",
  levelConfidence: 0,
  placementDone: false,
  placementHistory: [],
  vocabCards: {},
  grammarProgress: {},
  conversationsDone: [],
  chaptersRead: [],
};

interface ProgressState {
  language: Language;
  byLanguage: Record<Language, LangProgress>;
  xp: number;
  streakCount: number;
  lastActiveDate: string | null;
  activeDates: string[];
  sessionsCount: number;
  onboarded: boolean;
  aiProvider: "claude" | "gemini";
  apiKey: string;
  aiModel: string;
  geminiApiKey: string;
  geminiModel: string;
  accentTheme: string;
  remindersEnabled: boolean;
  mySalaryEur: number | null;
  userAvatar: string;
  ttsVoiceURI: string;
  useAiVoice: boolean;
  aiVoiceName: string;
}

const defaultState: ProgressState = {
  language: "de",
  byLanguage: {
    de: { ...defaultLangProgress },
    en: { ...defaultLangProgress },
    fr: { ...defaultLangProgress },
  },
  xp: 0,
  streakCount: 0,
  lastActiveDate: null,
  activeDates: [],
  sessionsCount: 0,
  onboarded: false,
  aiProvider: "claude",
  apiKey: "",
  aiModel: "claude-opus-5",
  geminiApiKey: "",
  geminiModel: "gemini-flash-latest",
  accentTheme: "emerald",
  remindersEnabled: false,
  mySalaryEur: null,
  userAvatar: "🙂",
  ttsVoiceURI: "",
  useAiVoice: false,
  aiVoiceName: "Kore",
};

const VALID_LANGUAGES: Language[] = ["de", "en", "fr"];

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);

    // Migrate the pre-multi-language shape (German progress fields lived
    // directly on the root object) into byLanguage.de the first time an
    // existing user's data is loaded after this change.
    if (!parsed.byLanguage) {
      const migratedDe: LangProgress = {
        level: parsed.level ?? defaultLangProgress.level,
        levelConfidence: parsed.levelConfidence ?? defaultLangProgress.levelConfidence,
        placementDone: parsed.placementDone ?? defaultLangProgress.placementDone,
        placementHistory: parsed.placementHistory ?? defaultLangProgress.placementHistory,
        vocabCards: parsed.vocabCards ?? defaultLangProgress.vocabCards,
        grammarProgress: parsed.grammarProgress ?? defaultLangProgress.grammarProgress,
        conversationsDone: parsed.conversationsDone ?? defaultLangProgress.conversationsDone,
        chaptersRead: parsed.chaptersRead ?? defaultLangProgress.chaptersRead,
      };
      parsed.byLanguage = {
        de: migratedDe,
        en: { ...defaultLangProgress },
        fr: { ...defaultLangProgress },
      };
      parsed.language = "de";
    }
    if (!VALID_LANGUAGES.includes(parsed.language)) parsed.language = "de";

    return {
      ...defaultState,
      ...parsed,
      byLanguage: { ...defaultState.byLanguage, ...parsed.byLanguage },
    };
  } catch {
    return defaultState;
  }
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

interface ProgressApi extends ProgressState, LangProgress {
  addXp: (amount: number) => void;
  touchToday: () => void;
  reviewVocab: (id: string, grade: Grade) => void;
  getVocabCard: (id: string) => SRSCard | undefined;
  recordGrammarAttempt: (
    topicId: string,
    exerciseId: string,
    correct: boolean,
  ) => void;
  setLevel: (level: CEFRLevel, confidence: number) => void;
  recordPlacement: (level: CEFRLevel, score: number) => void;
  markConversationDone: (id: string) => void;
  incrementSessions: () => void;
  resetProgress: () => void;
  completeOnboarding: () => void;
  setApiKey: (key: string) => void;
  setAiModel: (model: string) => void;
  setAiProvider: (provider: "claude" | "gemini") => void;
  setGeminiApiKey: (key: string) => void;
  setGeminiModel: (model: string) => void;
  setAccentTheme: (theme: string) => void;
  setRemindersEnabled: (enabled: boolean) => void;
  setMySalaryEur: (value: number | null) => void;
  setUserAvatar: (emoji: string) => void;
  markChapterRead: (chapterId: string) => void;
  setTtsVoiceURI: (voiceURI: string) => void;
  setUseAiVoice: (enabled: boolean) => void;
  setAiVoiceName: (name: string) => void;
  setLanguage: (language: Language) => void;
}

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadState);
  const lang = state.byLanguage[state.language] ?? defaultLangProgress;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Applies an updater to the CURRENT language's slice only — every other
  // language's progress (and all the global settings) is left untouched.
  const updateLang = useCallback((updater: (l: LangProgress) => LangProgress) => {
    setState((s) => {
      const current = s.byLanguage[s.language] ?? defaultLangProgress;
      return {
        ...s,
        byLanguage: { ...s.byLanguage, [s.language]: updater(current) },
      };
    });
  }, []);

  const touchToday = useCallback(() => {
    setState((s) => {
      const today = todayStr();
      if (s.lastActiveDate === today) return s;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = s.lastActiveDate === yesterday.toISOString().slice(0, 10);
      const streakCount = wasYesterday ? s.streakCount + 1 : 1;
      const activeDates = s.activeDates.includes(today)
        ? s.activeDates
        : [...s.activeDates, today].slice(-90);
      return { ...s, lastActiveDate: today, streakCount, activeDates };
    });
  }, []);

  const addXp = useCallback((amount: number) => {
    setState((s) => ({ ...s, xp: s.xp + amount }));
  }, []);

  const reviewVocab = useCallback(
    (id: string, grade: Grade) => {
      updateLang((l) => {
        const existing = l.vocabCards[id] ?? createCard();
        const updated = reviewCard(existing, grade);
        return { ...l, vocabCards: { ...l.vocabCards, [id]: updated } };
      });
    },
    [updateLang],
  );

  const getVocabCard = useCallback((id: string) => lang.vocabCards[id], [lang.vocabCards]);

  const recordGrammarAttempt = useCallback(
    (topicId: string, exerciseId: string, correct: boolean) => {
      updateLang((l) => {
        const prev = l.grammarProgress[topicId] ?? {
          completed: [],
          correct: 0,
          attempts: 0,
        };
        const completed = prev.completed.includes(exerciseId)
          ? prev.completed
          : correct
            ? [...prev.completed, exerciseId]
            : prev.completed;
        return {
          ...l,
          grammarProgress: {
            ...l.grammarProgress,
            [topicId]: {
              completed,
              correct: prev.correct + (correct ? 1 : 0),
              attempts: prev.attempts + 1,
            },
          },
        };
      });
    },
    [updateLang],
  );

  const setLevel = useCallback(
    (level: CEFRLevel, confidence: number) => {
      updateLang((l) => ({ ...l, level, levelConfidence: confidence }));
    },
    [updateLang],
  );

  const recordPlacement = useCallback(
    (level: CEFRLevel, score: number) => {
      updateLang((l) => ({
        ...l,
        level,
        levelConfidence: score,
        placementDone: true,
        placementHistory: [...l.placementHistory, { date: todayStr(), level, score }],
      }));
    },
    [updateLang],
  );

  const markConversationDone = useCallback(
    (id: string) => {
      updateLang((l) =>
        l.conversationsDone.includes(id)
          ? l
          : { ...l, conversationsDone: [...l.conversationsDone, id] },
      );
    },
    [updateLang],
  );

  const markChapterRead = useCallback(
    (chapterId: string) => {
      updateLang((l) =>
        l.chaptersRead.includes(chapterId)
          ? l
          : { ...l, chaptersRead: [...l.chaptersRead, chapterId] },
      );
    },
    [updateLang],
  );

  const incrementSessions = useCallback(() => {
    setState((s) => ({ ...s, sessionsCount: s.sessionsCount + 1 }));
  }, []);

  const resetProgress = useCallback(() => {
    setState(defaultState);
  }, []);

  const completeOnboarding = useCallback(() => {
    setState((s) => ({ ...s, onboarded: true }));
  }, []);

  const setApiKey = useCallback((key: string) => {
    setState((s) => ({ ...s, apiKey: key }));
  }, []);

  const setAiModel = useCallback((model: string) => {
    setState((s) => ({ ...s, aiModel: model }));
  }, []);

  const setAiProvider = useCallback((provider: "claude" | "gemini") => {
    setState((s) => ({ ...s, aiProvider: provider }));
  }, []);

  const setGeminiApiKey = useCallback((key: string) => {
    setState((s) => ({ ...s, geminiApiKey: key }));
  }, []);

  const setGeminiModel = useCallback((model: string) => {
    setState((s) => ({ ...s, geminiModel: model }));
  }, []);

  const setAccentTheme = useCallback((theme: string) => {
    setState((s) => ({ ...s, accentTheme: theme }));
  }, []);

  const setRemindersEnabled = useCallback((enabled: boolean) => {
    setState((s) => ({ ...s, remindersEnabled: enabled }));
  }, []);

  const setMySalaryEur = useCallback((value: number | null) => {
    setState((s) => ({ ...s, mySalaryEur: value }));
  }, []);

  const setUserAvatar = useCallback((emoji: string) => {
    setState((s) => ({ ...s, userAvatar: emoji }));
  }, []);

  const setTtsVoiceURI = useCallback((voiceURI: string) => {
    setState((s) => ({ ...s, ttsVoiceURI: voiceURI }));
  }, []);

  const setUseAiVoice = useCallback((enabled: boolean) => {
    setState((s) => ({ ...s, useAiVoice: enabled }));
  }, []);

  const setAiVoiceName = useCallback((name: string) => {
    setState((s) => ({ ...s, aiVoiceName: name }));
  }, []);

  const setLanguage = useCallback((language: Language) => {
    setState((s) => ({ ...s, language }));
  }, []);

  const value = useMemo<ProgressApi>(
    () => ({
      ...state,
      ...lang,
      addXp,
      touchToday,
      reviewVocab,
      getVocabCard,
      recordGrammarAttempt,
      setLevel,
      recordPlacement,
      markConversationDone,
      incrementSessions,
      resetProgress,
      completeOnboarding,
      setApiKey,
      setAiModel,
      setAiProvider,
      setGeminiApiKey,
      setGeminiModel,
      setAccentTheme,
      setRemindersEnabled,
      setMySalaryEur,
      setUserAvatar,
      markChapterRead,
      setTtsVoiceURI,
      setUseAiVoice,
      setAiVoiceName,
      setLanguage,
    }),
    [
      state,
      lang,
      addXp,
      touchToday,
      reviewVocab,
      getVocabCard,
      recordGrammarAttempt,
      setLevel,
      recordPlacement,
      markConversationDone,
      incrementSessions,
      resetProgress,
      completeOnboarding,
      setApiKey,
      setAiModel,
      setAiProvider,
      setGeminiApiKey,
      setGeminiModel,
      setAccentTheme,
      setRemindersEnabled,
      setMySalaryEur,
      setUserAvatar,
      markChapterRead,
      setTtsVoiceURI,
      setUseAiVoice,
      setAiVoiceName,
      setLanguage,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressApi {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
