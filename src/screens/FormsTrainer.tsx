import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { normalize } from "../utils/text";
import { FORMS_BY_LANGUAGE, type FormsDeck } from "../data/formsDecks";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FormsTrainer({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const decks = FORMS_BY_LANGUAGE[progress.language];
  const [deckId, setDeckId] = useState<string | null>(null);
  const deck = decks.find((d) => d.id === deckId);

  if (!deck) {
    return (
      <div>
        <TopBar title="Тренажёр форм слов" onBack={() => nav({ name: "vocab-topics" })} />
        <div className="px-4 py-4">
          <p className="text-sm text-slate-400">
            Отрабатывайте грамматические формы слов: неправильные глаголы,
            множественное число, степени сравнения и другие формы, которые
            приходится просто запомнить.
          </p>
          <div className="mt-4 space-y-2.5">
            {decks.map((d) => (
              <button
                key={d.id}
                onClick={() => setDeckId(d.id)}
                className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
              >
                <span className="text-2xl">{d.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-100">{d.label}</p>
                  <p className="text-[11px] text-slate-500">{d.items.length} слов</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <Session key={deck.id} deck={deck} onExit={() => setDeckId(null)} addXp={progress.addXp} />;
}

function Session({
  deck,
  onExit,
  addXp,
}: {
  deck: FormsDeck;
  onExit: () => void;
  addXp: (n: number) => void;
}) {
  const items = useMemo(() => shuffle(deck.items).slice(0, 10), [deck]);
  const fieldCount = deck.fieldLabels.length;

  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [inputs, setInputs] = useState<string[]>(() => Array(fieldCount).fill(""));
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const current = items[index];

  const check = () => {
    if (!current) return;
    const res = current.forms.map((exp, i) => normalize(inputs[i] || "") === normalize(exp));
    setResults(res);
    if (res.every(Boolean)) {
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
      setInputs(Array(fieldCount).fill(""));
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
        title={deck.label}
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
          <p className="text-2xl font-bold text-slate-50">{current.base}</p>
          <p className="mt-1 text-sm text-slate-500">{current.ru}</p>
          <div className="mt-5 space-y-3 text-left">
            {deck.fieldLabels.map((label, i) => (
              <Field
                key={label}
                label={label}
                value={inputs[i]}
                onChange={(v) => setInputs((prev) => prev.map((x, j) => (j === i ? v : x)))}
                disabled={checked}
                correct={results[i]}
                answer={current.forms[i]}
                checked={checked}
              />
            ))}
          </div>
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
