import { useEffect, useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { ExerciseCard } from "../components/ExerciseCard";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { isDue } from "../utils/srs";
import type { Exercise, VocabItem } from "../types";

const SESSION_SECONDS = 5 * 60;

type Item =
  | { kind: "vocab"; data: VocabItem }
  | { kind: "grammar"; data: Exercise };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function ExpressMode({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { vocabulary, grammarTopics } = useLanguageData();

  const items = useMemo<Item[]>(() => {
    const dueVocab = vocabulary.filter((v) => {
      const card = progress.vocabCards[v.id];
      return !card || isDue(card);
    });
    const pool = dueVocab.length >= 6 ? dueVocab : vocabulary;
    const vocabItems: Item[] = shuffle(pool)
      .slice(0, 6)
      .map((data) => ({ kind: "vocab" as const, data }));

    const grammarPool = grammarTopics.flatMap((t) => t.exercises);
    const grammarItems: Item[] = shuffle(grammarPool)
      .slice(0, 4)
      .map((data) => ({ kind: "grammar" as const, data }));

    return shuffle([...vocabItems, ...grammarItems]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [seconds, setSeconds] = useState(SESSION_SECONDS);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setFinished(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [finished]);

  useEffect(() => {
    if (index >= items.length && !finished) {
      setFinished(true);
    }
  }, [index, items.length, finished]);

  useEffect(() => {
    if (finished) {
      progress.incrementSessions();
      progress.addXp(15);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const current = items[index];

  const advance = () => {
    setFlipped(false);
    setAnswered(false);
    setIndex((i) => i + 1);
  };

  const gradeVocab = (knew: boolean) => {
    if (current?.kind !== "vocab") return;
    progress.reviewVocab(current.data.id, knew ? 3 : 0);
    if (knew) setCorrect((c) => c + 1);
    advance();
  };

  const handleGrammarAnswered = (isCorrect: boolean) => {
    if (current?.kind !== "grammar") return;
    if (isCorrect) setCorrect((c) => c + 1);
    setAnswered(true);
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-5xl">⚡</span>
        <h2 className="mt-4 text-xl font-bold text-slate-50">Экспресс-сессия завершена</h2>
        <p className="mt-2 text-slate-400">
          Правильно {correct} из {index}
        </p>
        <p className="accent-text mt-1 text-sm">+15 XP</p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button
            onClick={() => nav({ name: "express" })}
            className="rounded-xl bg-indigo-500 py-3 font-semibold text-indigo-950"
          >
            Ещё одна сессия
          </button>
          <button
            onClick={() => nav({ name: "home" })}
            className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
          >
            На главную
          </button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div>
      <TopBar
        title="Экспресс-тренировка"
        onBack={() => nav({ name: "home" })}
        right={
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              seconds <= 30 ? "bg-red-500/20 text-red-400" : "bg-slate-800 text-slate-300"
            }`}
          >
            {formatTime(seconds)}
          </span>
        }
      />
      <div className="px-4 py-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all"
            style={{ width: `${(index / items.length) * 100}%` }}
          />
        </div>

        {current.kind === "vocab" && (
          <div className="mt-6">
            <div
              className={`flip-card h-56 w-full cursor-pointer ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped((f) => !f)}
            >
              <div className="flip-card-inner relative h-full w-full">
                <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-slate-900 p-6 text-center">
                  {current.data.emoji && <span className="text-5xl">{current.data.emoji}</span>}
                  <p className="text-2xl font-bold text-slate-50">{current.data.de}</p>
                  <div onClick={(e) => e.stopPropagation()}>
                    <SpeakButton text={current.data.de} />
                  </div>
                </div>
                <div className="flip-card-back accent-soft-bg absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-6 text-center">
                  <p className="accent-text text-xl font-semibold">{current.data.ru}</p>
                </div>
              </div>
            </div>
            {flipped ? (
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  onClick={() => gradeVocab(false)}
                  className="rounded-xl bg-red-500/15 py-3 font-semibold text-red-400"
                >
                  Не знал
                </button>
                <button
                  onClick={() => gradeVocab(true)}
                  className="rounded-xl bg-emerald-500/15 py-3 font-semibold text-emerald-400"
                >
                  Знал
                </button>
              </div>
            ) : (
              <p className="mt-4 text-center text-xs text-slate-500">
                Нажми на карточку, чтобы увидеть перевод
              </p>
            )}
          </div>
        )}

        {current.kind === "grammar" && (
          <div className="mt-6 space-y-4">
            <ExerciseCard
              key={current.data.id}
              exercise={current.data}
              onAnswered={handleGrammarAnswered}
            />
            {answered && (
              <button
                onClick={advance}
                className="w-full rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
              >
                Далее →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
