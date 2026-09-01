import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { ExerciseCard } from "../components/ExerciseCard";
import { GRAMMAR_TOPICS } from "../data/grammar";
import { useProgress } from "../hooks/useProgress";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function GrammarDetail({
  topicId,
  nav,
}: {
  topicId: string;
  nav: (r: Route) => void;
}) {
  const topic = GRAMMAR_TOPICS.find((t) => t.id === topicId);
  const progress = useProgress();
  const [mode, setMode] = useState<"theory" | "exercises">("theory");
  const [sessionKey, setSessionKey] = useState(0);
  const [exIndex, setExIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const exercises = useMemo(
    () => (topic ? shuffle(topic.exercises).slice(0, 5) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topicId, sessionKey],
  );

  if (!topic) return null;

  const handleAnswered = (correct: boolean) => {
    progress.recordGrammarAttempt(topic.id, exercises[exIndex].id, correct);
    if (correct) progress.addXp(3);
    setAnswered(true);
  };

  const next = () => {
    if (exIndex + 1 >= exercises.length) {
      setDone(true);
    } else {
      setExIndex((i) => i + 1);
      setAnswered(false);
    }
  };

  if (mode === "theory") {
    return (
      <div>
        <TopBar title={topic.title} onBack={() => nav({ name: "grammar-topics" })} />
        <div className="space-y-5 px-4 py-4">
          <div className="rounded-2xl bg-slate-900 p-4">
            <p className="text-sm font-semibold text-sky-400">Правило</p>
            <ul className="mt-2 space-y-2">
              {topic.explanation.map((line, i) => (
                <li key={i} className="text-sm leading-relaxed text-slate-200">
                  • {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-400">Примеры</p>
            <div className="space-y-2">
              {topic.examples.map((ex, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl bg-slate-900 p-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-100">{ex.de}</p>
                    <p className="text-xs text-slate-500">{ex.ru}</p>
                  </div>
                  <SpeakButton text={ex.de} size="sm" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMode("exercises")}
            className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-sky-950"
          >
            Начать упражнения ({exercises.length})
          </button>
        </div>
      </div>
    );
  }

  if (done) {
    const stats = progress.grammarProgress[topic.id];
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-5xl">✅</span>
        <h2 className="mt-4 text-xl font-bold text-slate-50">Тема пройдена</h2>
        <p className="mt-2 text-slate-400">
          Верно {stats?.completed.length ?? 0} из {exercises.length}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button
            onClick={() => {
              setExIndex(0);
              setDone(false);
              setAnswered(false);
              setSessionKey((k) => k + 1);
              setMode("exercises");
            }}
            className="rounded-xl bg-sky-500 py-3 font-semibold text-sky-950"
          >
            Повторить упражнения (в новом порядке)
          </button>
          <button
            onClick={() => nav({ name: "grammar-topics" })}
            className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
          >
            К темам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar
        title={topic.title}
        onBack={() => setMode("theory")}
        right={
          <span className="text-xs text-slate-500">
            {exIndex + 1}/{exercises.length}
          </span>
        }
      />
      <div className="space-y-4 px-4 py-4">
        <ExerciseCard
          key={exercises[exIndex].id}
          exercise={exercises[exIndex]}
          onAnswered={handleAnswered}
        />
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
