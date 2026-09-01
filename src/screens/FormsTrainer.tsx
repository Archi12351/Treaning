import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { normalize } from "../utils/text";
import { IRREGULAR_VERBS, NOUN_PLURALS, ADJ_COMPARISON } from "../data/forms";

type Mode = "verben" | "nomen" | "adjektive";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MODES: { id: Mode; label: string; icon: string }[] = [
  { id: "verben", label: "Глаголы", icon: "🏃" },
  { id: "nomen", label: "Существительные", icon: "📦" },
  { id: "adjektive", label: "Прилагательные", icon: "📏" },
];

export function FormsTrainer({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [mode, setMode] = useState<Mode | null>(null);

  if (!mode) {
    return (
      <div>
        <TopBar title="Тренажёр форм слов" onBack={() => nav({ name: "vocab-topics" })} />
        <div className="px-4 py-4">
          <p className="text-sm text-slate-400">
            Отрабатывайте разные грамматические формы слов: спряжение
            неправильных глаголов, множественное число существительных,
            степени сравнения прилагательных.
          </p>
          <div className="mt-4 space-y-2.5">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
              >
                <span className="text-2xl">{m.icon}</span>
                <span className="text-sm font-semibold text-slate-100">{m.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <Session mode={mode} onExit={() => setMode(null)} addXp={progress.addXp} />;
}

function Session({
  mode,
  onExit,
  addXp,
}: {
  mode: Mode;
  onExit: () => void;
  addXp: (n: number) => void;
}) {
  const items = useMemo(() => {
    if (mode === "verben") return shuffle(IRREGULAR_VERBS).slice(0, 10);
    if (mode === "nomen") return shuffle(NOUN_PLURALS).slice(0, 10);
    return shuffle(ADJ_COMPARISON).slice(0, 10);
  }, [mode]);

  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [inputs, setInputs] = useState<string[]>(["", ""]);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const current = items[index] as (typeof items)[number] | undefined;

  const check = () => {
    if (!current) return;
    let expected: string[] = [];
    if (mode === "verben") {
      const v = current as (typeof IRREGULAR_VERBS)[number];
      expected = [v.praeteritum, v.partizip2];
    } else if (mode === "nomen") {
      const n = current as (typeof NOUN_PLURALS)[number];
      expected = [n.plural];
    } else {
      const a = current as (typeof ADJ_COMPARISON)[number];
      expected = [a.komparativ, a.superlativ];
    }
    const res = expected.map((exp, i) => normalize(inputs[i] || "") === normalize(exp));
    setResults(res);
    const allCorrect = res.every(Boolean);
    if (allCorrect) {
      setCorrectCount((c) => c + 1);
      addXp(2);
    }
    setChecked(true);
  };

  const next = () => {
    if (index + 1 >= items.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setInputs(["", ""]);
      setChecked(false);
      setResults([]);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-5xl">✍️</span>
        <h2 className="mt-4 text-xl font-bold text-slate-50">Тренировка завершена</h2>
        <p className="mt-2 text-slate-400">
          Правильно {correctCount} из {items.length}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button onClick={onExit} className="accent-bg rounded-xl py-3 font-semibold">
            К выбору категории
          </button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div>
      <TopBar
        title="Тренажёр форм слов"
        onBack={onExit}
        right={
          <span className="text-xs text-slate-500">
            {index + 1}/{items.length}
          </span>
        }
      />
      <div className="px-4 py-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="accent-bg h-full rounded-full transition-all"
            style={{ width: `${(index / items.length) * 100}%` }}
          />
        </div>

        <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-center">
          {mode === "verben" && (
            <>
              <p className="text-2xl font-bold text-slate-50">
                {(current as (typeof IRREGULAR_VERBS)[number]).infinitiv}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {(current as (typeof IRREGULAR_VERBS)[number]).ru}
              </p>
              <div className="mt-5 space-y-3 text-left">
                <Field
                  label="Präteritum (ich/er...)"
                  value={inputs[0]}
                  onChange={(v) => setInputs([v, inputs[1]])}
                  disabled={checked}
                  correct={results[0]}
                  answer={(current as (typeof IRREGULAR_VERBS)[number]).praeteritum}
                  checked={checked}
                />
                <Field
                  label="Partizip II (haben/sein + ...)"
                  value={inputs[1]}
                  onChange={(v) => setInputs([inputs[0], v])}
                  disabled={checked}
                  correct={results[1]}
                  answer={(current as (typeof IRREGULAR_VERBS)[number]).partizip2}
                  checked={checked}
                />
              </div>
            </>
          )}
          {mode === "nomen" && (
            <>
              <p className="text-2xl font-bold text-slate-50">
                {(current as (typeof NOUN_PLURALS)[number]).singular}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {(current as (typeof NOUN_PLURALS)[number]).ru}
              </p>
              <div className="mt-5 space-y-3 text-left">
                <Field
                  label="Plural (die ...)"
                  value={inputs[0]}
                  onChange={(v) => setInputs([v, inputs[1]])}
                  disabled={checked}
                  correct={results[0]}
                  answer={(current as (typeof NOUN_PLURALS)[number]).plural}
                  checked={checked}
                />
              </div>
            </>
          )}
          {mode === "adjektive" && (
            <>
              <p className="text-2xl font-bold text-slate-50">
                {(current as (typeof ADJ_COMPARISON)[number]).positive}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {(current as (typeof ADJ_COMPARISON)[number]).ru}
              </p>
              <div className="mt-5 space-y-3 text-left">
                <Field
                  label="Komparativ"
                  value={inputs[0]}
                  onChange={(v) => setInputs([v, inputs[1]])}
                  disabled={checked}
                  correct={results[0]}
                  answer={(current as (typeof ADJ_COMPARISON)[number]).komparativ}
                  checked={checked}
                />
                <Field
                  label="Superlativ (am ...)"
                  value={inputs[1]}
                  onChange={(v) => setInputs([inputs[0], v])}
                  disabled={checked}
                  correct={results[1]}
                  answer={(current as (typeof ADJ_COMPARISON)[number]).superlativ}
                  checked={checked}
                />
              </div>
            </>
          )}
        </div>

        {!checked ? (
          <button
            onClick={check}
            disabled={!inputs[0].trim()}
            className="accent-bg mt-5 w-full rounded-xl py-3 font-semibold disabled:opacity-30"
          >
            Проверить
          </button>
        ) : (
          <button
            onClick={next}
            className="mt-5 w-full rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
          >
            Далее →
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  disabled,
  correct,
  answer,
  checked,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
  correct?: boolean;
  answer: string;
  checked: boolean;
}) {
  return (
    <div>
      <label className="text-xs text-slate-500">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm text-slate-100 outline-none disabled:opacity-80 ${
          checked
            ? correct
              ? "border-emerald-500 bg-emerald-500/10"
              : "border-red-500 bg-red-500/10"
            : "border-slate-700 bg-slate-800/50 focus:border-[color:var(--accent)]"
        }`}
      />
      {checked && !correct && (
        <p className="mt-1 text-xs text-emerald-400">Правильно: {answer}</p>
      )}
    </div>
  );
}
