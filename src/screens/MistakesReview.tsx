import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { ExerciseCard } from "../components/ExerciseCard";
import { SpeakButton } from "../components/SpeakButton";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { Typing } from "./VocabTrainer";
import type { Exercise, VocabItem } from "../types";

// «Мои ошибки»: everything the learner got wrong — grammar exercises and
// words — comes back here until it's answered correctly twice in a row.
// This is the "a tutor keeps drilling your weak spots" part of the app.

type Item =
  | { kind: "grammar"; key: string; topicId: string; exercise: Exercise; topicTitle: string }
  | { kind: "vocab"; key: string; word: VocabItem };

const SESSION = 15;

export function MistakesReview({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { grammarTopics, vocabulary } = useLanguageData();

  const items = useMemo<Item[]>(() => {
    const exById = new Map<string, { ex: Exercise; topicId: string; title: string }>();
    for (const t of grammarTopics) for (const ex of t.exercises) exById.set(ex.id, { ex, topicId: t.id, title: t.title });
    const wordById = new Map(vocabulary.map((w) => [w.id, w]));
    return Object.entries(progress.mistakes)
      .sort((a, b) => b[1].wrongCount - a[1].wrongCount || a[1].lastWrong.localeCompare(b[1].lastWrong))
      .map(([key, m]): Item | null => {
        if (m.kind === "grammar") {
          const found = exById.get(m.refId);
          return found ? { kind: "grammar", key, topicId: found.topicId, exercise: found.ex, topicTitle: found.title } : null;
        }
        const w = wordById.get(m.refId);
        return w ? { kind: "vocab", key, word: w } : null;
      })
      .filter((x): x is Item => x !== null)
      .slice(0, SESSION);
    // snapshot at open
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [fixed, setFixed] = useState(0);
  const total = Object.keys(progress.mistakes).length;

  const back = () => nav({ name: "home" });

  if (items.length === 0) {
    return (
      <div>
        <TopBar title="Мои ошибки" onBack={back} />
        <div className="p-8 text-center">
          <p className="text-5xl">🎯</p>
          <p className="mt-4 font-semibold text-slate-100">Ошибок нет — так держать!</p>
          <p className="mt-2 text-sm text-slate-400">
            Сюда автоматически попадает всё, в чём вы ошиблись: упражнения и слова.
            Каждая ошибка исчезает, когда вы дважды подряд ответите правильно.
          </p>
        </div>
      </div>
    );
  }

  if (index >= items.length) {
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-6xl">🛠️</span>
        <h2 className="mt-4 text-2xl font-bold text-slate-50">Работа над ошибками</h2>
        <p className="mt-2 text-slate-400">
          Исправлено с первого раза: {fixed} из {items.length}
        </p>
        <p className="mt-1 text-xs text-slate-500">Осталось в списке: {Object.keys(progress.mistakes).length}</p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button onClick={() => { setIndex(0); setFixed(0); setAnswered(null); }} className="accent-bg rounded-xl py-3 font-semibold">
            Ещё круг
          </button>
          <button onClick={back} className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200">
            На главную
          </button>
        </div>
      </div>
    );
  }

  const item = items[index];
  const onResult = (ok: boolean) => {
    if (ok) {
      setFixed((f) => f + 1);
      progress.addXp(3);
      progress.bumpDaily("mistakes");
    }
    setAnswered(ok);
  };

  return (
    <div className="flex min-h-[100svh] flex-col">
      <TopBar
        title="Мои ошибки"
        onBack={back}
        right={<span className="text-xs text-slate-500">{index + 1}/{items.length} · всего {total}</span>}
      />
      <div className="flex-1 space-y-4 px-4 py-4">
        {item.kind === "grammar" ? (
          <>
            <p className="text-xs text-slate-500">🧩 {item.topicTitle}</p>
            <ExerciseCard
              key={item.key + index}
              exercise={item.exercise}
              onAnswered={(ok) => {
                progress.recordGrammarAttempt(item.topicId, item.exercise.id, ok);
                onResult(ok);
              }}
            />
          </>
        ) : (
          <>
            <p className="text-xs text-slate-500">📚 Слово</p>
            <Typing
              key={item.key + index}
              word={item.word}
              listen={false}
              answered={answered === null ? null : { ok: answered }}
              onAnswer={(r) => {
                const ok = r !== "wrong";
                progress.reviewVocab(item.word.id, ok ? 2 : 0);
                progress.recordVocabResult(item.word.id, item.word.topic, ok);
                onResult(ok);
              }}
            />
            {answered !== null && (
              <div className={`rounded-2xl p-4 ${answered ? "bg-emerald-500/15" : "bg-red-500/15"}`}>
                <div className="flex items-center gap-2">
                  <SpeakButton text={item.word.de} size="sm" />
                  <div>
                    <p className="font-semibold text-slate-100">{item.word.de}</p>
                    <p className="text-xs text-slate-400">{item.word.ru}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-300">{item.word.exampleDe}</p>
              </div>
            )}
          </>
        )}
        {answered !== null && (
          <button
            onClick={() => {
              setAnswered(null);
              setIndex((i) => i + 1);
            }}
            className="accent-bg w-full rounded-xl py-3 font-semibold"
          >
            Дальше →
          </button>
        )}
      </div>
    </div>
  );
}
