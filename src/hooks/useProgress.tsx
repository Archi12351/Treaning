import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CEFRLevel, Grade, SRSCard } from "../types";
import { createCard, reviewCard } from "../utils/srs";

const STORAGE_KEY = "deutsch-b2c1-progress-v1";

interface GrammarProgress {
  completed: string[];
  correct: number;
  attempts: number;
}

interface ProgressState {
  level: CEFRLevel;
  levelConfidence: number;
  placementDone: boolean;
  placementHistory: { date: string; level: CEFRLevel; score: number }[];
  xp: number;
  streakCount: number;
  lastActiveDate: string | null;
  activeDates: string[];
  vocabCards: Record<string, SRSCard>;
  grammarProgress: Record<string, GrammarProgress>;
  conversationsDone: string[];
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
  chaptersRead: string[];
  ttsVoiceURI: string;
}

const defaultState: ProgressState = {
  level: "A1",
  levelConfidence: 0,
  placementDone: false,
  placementHistory: [],
  xp: 0,
  streakCount: 0,
  lastActiveDate: null,
  activeDates: [],
  vocabCards: {},
  grammarProgress: {},
  conversationsDone: [],
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
  chaptersRead: [],
  ttsVoiceURI: "",
};

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

interface ProgressApi extends ProgressState {
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
}

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

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

  const reviewVocab = useCallback((id: string, grade: Grade) => {
    setState((s) => {
      const existing = s.vocabCards[id] ?? createCard();
      const updated = reviewCard(existing, grade);
      return {
        ...s,
        vocabCards: { ...s.vocabCards, [id]: updated },
      };
    });
  }, []);

  const getVocabCard = useCallback(
    (id: string) => state.vocabCards[id],
    [state.vocabCards],
  );

  const recordGrammarAttempt = useCallback(
    (topicId: string, exerciseId: string, correct: boolean) => {
      setState((s) => {
        const prev = s.grammarProgress[topicId] ?? {
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
          ...s,
          grammarProgress: {
            ...s.grammarProgress,
            [topicId]: {
              completed,
              correct: prev.correct + (correct ? 1 : 0),
              attempts: prev.attempts + 1,
            },
          },
        };
      });
    },
    [],
  );

  const setLevel = useCallback((level: CEFRLevel, confidence: number) => {
    setState((s) => ({ ...s, level, levelConfidence: confidence }));
  }, []);

  const recordPlacement = useCallback((level: CEFRLevel, score: number) => {
    setState((s) => ({
      ...s,
      level,
      levelConfidence: score,
      placementDone: true,
      placementHistory: [
        ...s.placementHistory,
        { date: todayStr(), level, score },
      ],
    }));
  }, []);

  const markConversationDone = useCallback((id: string) => {
    setState((s) =>
      s.conversationsDone.includes(id)
        ? s
        : { ...s, conversationsDone: [...s.conversationsDone, id] },
    );
  }, []);

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

  const markChapterRead = useCallback((chapterId: string) => {
    setState((s) =>
      s.chaptersRead.includes(chapterId)
        ? s
        : { ...s, chaptersRead: [...s.chaptersRead, chapterId] },
    );
  }, []);

  const setTtsVoiceURI = useCallback((voiceURI: string) => {
    setState((s) => ({ ...s, ttsVoiceURI: voiceURI }));
  }, []);

  const value = useMemo<ProgressApi>(
    () => ({
      ...state,
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
    }),
    [
      state,
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
