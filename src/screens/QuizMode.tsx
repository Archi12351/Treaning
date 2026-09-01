import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { ExerciseCard } from "../components/ExerciseCard";
import { VOCABULARY } from "../data/vocabulary";
import { GRAMMAR_TOPICS } from "../data/grammar";
import { useProgress } from "../hooks/useProgress";
import type { Exercise } from "../types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuiz(): Exercise[] {
  const vocabPicks = shuffle(VOCABULARY).slice(0, 8);
  const vocabExercises: Exercise[] = vocabPicks.map((v) => {
    const distractors = shuffle(
      VOCABULARY.filter((o) => o.id !== v.id).map((o) => o.ru),
    ).slice(0, 3);
    return {
      id: `quiz-vocab-${v.id}`,
      type: "choice",
      level: v.level,
      prompt: `Как переводится «${v.de}»?`,
      options: shuffle([v.ru, ...distractors]),
      answer: v.ru,
    };
  });

  const grammarPool = GRAMMAR_TOPICS.flatMap((t) => t.exercises).filter(
    (e) => e.type === "choice",
  );
  const grammarExercises = shuffle(grammarPool).slice(0, 6);

  return shuffle([...vocabExercises, ...grammarExercises]);
}

export function QuizMode({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [quiz] = useState<Exercise[]>(buildQuiz);
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const current = quiz[index];

  const handleAnswered = (correct: boolean) => {
    if (correct) {
      setCorrectCount((c) => c + 1);
      progress.addXp(2);
    }
    setAnswered(true);
  };

  const next = () => {
    if (index + 1 >= quiz.length) {
      progress.incrementSessions();
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setAnswered(false);
    }
  };

  const scorePercent = useMemo(
    () => Math.round((correctCount / quiz.length) * 100),
    [correctCount, quiz.length],
  );

  if (done) {
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-5xl">{scorePercent >= 70 ? "🎯" : "💪"}</span>
        <h2 className="mt-4 text-xl font-bold text-slate-50">Тест завершён</h2>
        <p className="accent-text mt-2 text-3xl font-black">{scorePercent}%</p>
        <p className="mt-1 text-sm text-slate-400">
          Правильно {correctCount} из {quiz.length}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button
            onClick={() => nav({ name: "quiz" })}
            className="accent-bg rounded-xl py-3 font-semibold"
          >
            Новый тест
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

  return (
    <div>
      <TopBar
        title="Тест"
        onBack={() => nav({ name: "home" })}
        right={
          <span className="text-xs text-slate-500">
            {index + 1}/{quiz.length}
          </span>
        }
      />
      <div className="space-y-4 px-4 py-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="accent-bg h-full rounded-full transition-all"
            style={{ width: `${(index / quiz.length) * 100}%` }}
          />
        </div>
        <ExerciseCard key={current.id} exercise={current} onAnswered={handleAnswered} />
        {answered && (
          <button
            onClick={next}
            className="w-full rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
          >
            Далее →
          </button>
        )}
      </div>
    </div>
  );
}
