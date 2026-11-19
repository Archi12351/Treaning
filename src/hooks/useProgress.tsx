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

// One entry per item the learner got wrong. It stays in the "Мои ошибки"
// review queue until it's answered correctly twice in a row.
export interface MistakeEntry {
  kind: "grammar" | "vocab";
  refId: string; // exercise id or vocab id
  topicId: string;
  wrongCount: number;
  streak: number; // correct answers in a row since the last mistake
  lastWrong: string;
}

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
  mistakes: Record<string, MistakeEntry>;
  textsRead: string[];
  writingsDone: number;
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
  mistakes: {},
  textsRead: [],
  writingsDone: 0,
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
  dailyGoalXp: number;
  xpByDay: Record<string, number>;
  achievements: string[];
  learnerGoal: string;
  daily: DailyStats;
  bestStreak: number;
  // «Заморозка серии»: одна пропущенная дата не обнуляет серию. Выдаётся за
  // каждые 7 дней подряд, максимум 2 в запасе.
  streakFreezes: number;
  lastFreezeUsed: string | null;
}

export type DailyKey = "vocab" | "grammar" | "reading" | "dialog" | "writing" | "mistakes";
export interface DailyStats {
  date: string;
  counts: Partial<Record<DailyKey, number>>;
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
  dailyGoalXp: 30,
  xpByDay: {},
  achievements: [],
  learnerGoal: "",
  daily: { date: "", counts: {} },
  bestStreak: 0,
  streakFreezes: 0,
  lastFreezeUsed: null,
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
        ...defaultLangProgress,
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
      byLanguage: Object.fromEntries(
        (Object.keys(defaultState.byLanguage) as Language[]).map((k) => [
          k,
          { ...defaultLangProgress, ...(parsed.byLanguage?.[k] ?? {}) },
        ]),
      ) as Record<Language, LangProgress>,
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
  recordVocabResult: (id: string, topicId: string, correct: boolean) => void;
  markTextRead: (id: string) => void;
  recordWriting: () => void;
  setDailyGoalXp: (xp: number) => void;
  unlockAchievements: (ids: string[]) => void;
  setLearnerGoal: (goal: string) => void;
  bumpDaily: (key: DailyKey, n?: number) => void;
  todayCounts: Partial<Record<DailyKey, number>>;
  todayXp: number;
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
      const dayBefore = new Date();
      dayBefore.setDate(dayBefore.getDate() - 2);
      const missedOneDay = s.lastActiveDate === dayBefore.toISOString().slice(0, 10);
      const useFreeze = !wasYesterday && missedOneDay && (s.streakFreezes ?? 0) > 0 && s.streakCount > 0;
      const streakCount = wasYesterday || useFreeze ? s.streakCount + 1 : 1;
      let streakFreezes = (s.streakFreezes ?? 0) - (useFreeze ? 1 : 0);
      if (streakCount % 7 === 0) streakFreezes = Math.min(2, streakFreezes + 1);
      const lastFreezeUsed = useFreeze ? today : s.lastFreezeUsed ?? null;
      const bestStreak = Math.max(s.bestStreak ?? 0, streakCount);
      const activeDates = s.activeDates.includes(today)
        ? s.activeDates
        : [...s.activeDates, today].slice(-90);
      return { ...s, lastActiveDate: today, streakCount, activeDates, bestStreak, streakFreezes, lastFreezeUsed };
    });
  }, []);

  const addXp = useCallback((amount: number) => {
    setState((s) => {
      const today = todayStr();
      const xpByDay = { ...s.xpByDay, [today]: (s.xpByDay[today] ?? 0) + amount };
      // keep ~4 months of history
      const keys = Object.keys(xpByDay).sort();
      for (const k of keys.slice(0, Math.max(0, keys.length - 120))) delete xpByDay[k];
      return { ...s, xp: s.xp + amount, xpByDay };
    });
  }, []);

  // Shared bookkeeping for the mistakes queue.
  const trackResult = useCallback(
    (kind: "grammar" | "vocab", refId: string, topicId: string, correct: boolean) => {
      updateLang((l) => {
        const key = `${kind}:${refId}`;
        const prev = l.mistakes[key];
        const mistakes = { ...l.mistakes };
        if (!correct) {
          mistakes[key] = {
            kind,
            refId,
            topicId,
            wrongCount: (prev?.wrongCount ?? 0) + 1,
            streak: 0,
            lastWrong: todayStr(),
          };
        } else if (prev) {
          if (prev.streak + 1 >= 2) delete mistakes[key];
          else mistakes[key] = { ...prev, streak: prev.streak + 1 };
        } else {
          return l;
        }
        return { ...l, mistakes };
      });
    },
    [updateLang],
  );

  const bumpDaily = useCallback((key: DailyKey, n = 1) => {
    setState((s) => {
      const today = todayStr();
      const base = s.daily?.date === today ? s.daily.counts : {};
      return { ...s, daily: { date: today, counts: { ...base, [key]: (base[key] ?? 0) + n } } };
    });
  }, []);

  const recordVocabResult = useCallback(
    (id: string, topicId: string, correct: boolean) => {
      trackResult("vocab", id, topicId, correct);
      bumpDaily("vocab");
    },
    [trackResult, bumpDaily],
  );

  const markTextRead = useCallback(
    (id: string) => {
      updateLang((l) => (l.textsRead.includes(id) ? l : { ...l, textsRead: [...l.textsRead, id] }));
    },
    [updateLang],
  );

  const recordWriting = useCallback(() => {
    updateLang((l) => ({ ...l, writingsDone: l.writingsDone + 1 }));
    bumpDaily("writing");
  }, [updateLang, bumpDaily]);

  const setDailyGoalXp = useCallback((xp: number) => {
    setState((s) => ({ ...s, dailyGoalXp: xp }));
  }, []);

  const unlockAchievements = useCallback((ids: string[]) => {
    setState((s) => {
      const fresh = ids.filter((id) => !s.achievements.includes(id));
      return fresh.length ? { ...s, achievements: [...s.achievements, ...fresh] } : s;
    });
  }, []);

  const setLearnerGoal = useCallback((goal: string) => {
    setState((s) => ({ ...s, learnerGoal: goal }));
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
      trackResult("grammar", exerciseId, topicId, correct);
      bumpDaily("grammar");
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
    [updateLang, trackResult, bumpDaily],
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
      recordVocabResult,
      markTextRead,
      recordWriting,
      setDailyGoalXp,
      unlockAchievements,
      setLearnerGoal,
      bumpDaily,
      todayCounts: state.daily?.date === todayStr() ? state.daily.counts : {},
      todayXp: state.xpByDay[todayStr()] ?? 0,
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
      recordVocabResult,
      markTextRead,
      recordWriting,
      setDailyGoalXp,
      unlockAchievements,
      setLearnerGoal,
      bumpDaily,
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
