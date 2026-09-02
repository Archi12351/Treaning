import { useEffect, useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import type { CEFRLevel, PlacementQuestion } from "../types";

const LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
const QUESTIONS_PER_LEVEL = 5;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Builds a fresh test each attempt: a random subset per level (so the exact
// question set and answer order differ every time) drawn from a larger pool.
function buildTest(pool: PlacementQuestion[]): PlacementQuestion[] {
  const result: PlacementQuestion[] = [];
  for (const level of LEVELS) {
    const levelPool = shuffle(pool.filter((q) => q.level === level));
    for (const q of levelPool.slice(0, QUESTIONS_PER_LEVEL)) {
      result.push({ ...q, options: shuffle(q.options) });
    }
  }
  return result;
}

function computeLevel(questions: PlacementQuestion[], answers: Record<string, boolean>) {
  let achieved: CEFRLevel = "A1";
  let totalCorrect = 0;

  for (const level of LEVELS) {
    const qs = questions.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    totalCorrect += correct;
    const ratio = qs.length ? correct / qs.length : 0;
    if (ratio >= 0.6) {
      achieved = level;
    } else {
      break;
    }
  }
  const score = Math.round((totalCorrect / questions.length) * 100);
  return { level: achieved, score };
}

export function PlacementTest({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { placementQuestions, meta } = useLanguageData();
  const questions = useMemo(() => buildTest(placementQuestions), [placementQuestions]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<{ level: CEFRLevel; score: number } | null>(null);

  const question = questions[index];

  useEffect(() => {
    progress.completeOnboarding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const choose = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === question.answer;
    const nextAnswers = { ...answers, [question.id]: correct };
    setAnswers(nextAnswers);
    setTimeout(() => {
      if (index + 1 >= questions.length) {
        const r = computeLevel(questions, nextAnswers);
        progress.recordPlacement(r.level, r.score);
        setResult(r);
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
      }
    }, 400);
  };

  if (result) {
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-5xl">🏆</span>
        <h2 className="mt-4 text-lg text-slate-300">Ваш уровень ({meta.label.toLowerCase()}):</h2>
        <p className="accent-text mt-2 text-5xl font-black">{result.level}</p>
        <p className="mt-3 text-sm text-slate-400">Точность ответов: {result.score}%</p>
        <p className="mt-6 text-sm text-slate-400">
          Мы составили индивидуальную программу с учётом вашего уровня и
          будем постепенно вести вас от {result.level} до C1–C2.
        </p>
        <button
          onClick={() => nav({ name: "home" })}
          className="accent-bg mt-8 w-full rounded-xl py-3 font-semibold"
        >
          Начать обучение
        </button>
      </div>
    );
  }

  return (
    <div>
      <TopBar
        title="Тест на уровень"
        onBack={() => nav({ name: "home" })}
        right={
          <span className="text-xs text-slate-500">
            {index + 1}/{questions.length}
          </span>
        }
      />
      <div className="px-4 py-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="accent-bg h-full rounded-full transition-all"
            style={{ width: `${(index / questions.length) * 100}%` }}
          />
        </div>

        <p className="mt-8 text-xl font-medium leading-relaxed text-slate-100">
          {question.prompt}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {question.options.map((opt) => {
            const isSelected = selected === opt;
            const showCorrect = selected && opt === question.answer;
            const showWrong = isSelected && opt !== question.answer;
            return (
              <button
                key={opt}
                onClick={() => choose(opt)}
                disabled={!!selected}
                className={`rounded-xl border px-3 py-3 text-sm font-medium ${
                  showCorrect
                    ? "border-emerald-500 bg-emerald-500/15 text-emerald-400"
                    : showWrong
                      ? "border-red-500 bg-red-500/15 text-red-400"
                      : "border-slate-700 bg-slate-800/50 text-slate-200"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => nav({ name: "home" })}
          className="mt-8 w-full text-center text-xs text-slate-500 underline"
        >
          Пропустить, определю уровень позже
        </button>
      </div>
    </div>
  );
}
