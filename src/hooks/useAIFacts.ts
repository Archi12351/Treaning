import { useCallback, useEffect, useRef, useState } from "react";
import type { Language } from "../types";
import { CULTURE_BY_LANGUAGE, type CultureFact } from "../data/facts";
import { generateFacts } from "../utils/aiFacts";
import { canUseAI } from "../utils/aiBackend";
import { useProgress } from "./useProgress";

// AI-generated facts are cached per language in localStorage so they survive
// reloads and keep accumulating: every visit to the Culture screen (at most
// once per REFRESH_MS) and every press of "Ещё факты" appends a new batch.
const STORAGE_KEY = "tutorem-ai-facts-v1";
const MAX_STORED = 400;
const REFRESH_MS = 6 * 60 * 60 * 1000;

interface StoredFacts {
  facts: CultureFact[];
  lastFetch: number;
}

type Store = Partial<Record<Language, StoredFacts>>;

function readStore(): Store {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Store;
  } catch {
    return {};
  }
}

function writeStore(store: Store) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Storage full or blocked — facts just won't persist this time.
  }
}

export function getStoredAIFacts(language: Language): CultureFact[] {
  return readStore()[language]?.facts ?? [];
}

export function useAIFacts(language: Language, { autoRefresh = false } = {}) {
  const progress = useProgress();
  const [aiFacts, setAiFacts] = useState<CultureFact[]>(() => getStoredAIFacts(language));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inFlight = useRef(false);

  const available = canUseAI(progress.aiProvider, progress.apiKey, progress.geminiApiKey);

  useEffect(() => {
    setAiFacts(getStoredAIFacts(language));
    setError(null);
  }, [language]);

  const generate = useCallback(async () => {
    if (inFlight.current || !available) return;
    inFlight.current = true;
    setLoading(true);
    setError(null);
    try {
      const bundle = CULTURE_BY_LANGUAGE[language];
      const store = readStore();
      const existing = store[language]?.facts ?? [];
      const titles = [...bundle.facts, ...existing].map((f) => f.title);
      const fresh = await generateFacts(
        {
          provider: progress.aiProvider,
          apiKey: progress.apiKey,
          model: progress.aiModel,
          geminiApiKey: progress.geminiApiKey,
          geminiModel: progress.geminiModel,
        },
        language,
        bundle.countries,
        titles,
      );
      // Newest first; keep the store bounded.
      const merged = [...fresh, ...existing].slice(0, MAX_STORED);
      store[language] = { facts: merged, lastFetch: Date.now() };
      writeStore(store);
      setAiFacts(merged);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Не удалось получить факты.");
      // Record the attempt so a failing key doesn't retry on every visit.
      const store = readStore();
      store[language] = { facts: store[language]?.facts ?? [], lastFetch: Date.now() };
      writeStore(store);
    } finally {
      inFlight.current = false;
      setLoading(false);
    }
  }, [available, language, progress.aiProvider, progress.apiKey, progress.aiModel, progress.geminiApiKey, progress.geminiModel]);

  useEffect(() => {
    if (!autoRefresh || !available) return;
    const last = readStore()[language]?.lastFetch ?? 0;
    if (Date.now() - last > REFRESH_MS) void generate();
  }, [autoRefresh, available, language, generate]);

  const clear = useCallback(() => {
    const store = readStore();
    delete store[language];
    writeStore(store);
    setAiFacts([]);
  }, [language]);

  return { aiFacts, loading, error, available, generate, clear };
}
