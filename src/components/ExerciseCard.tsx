import { useMemo, useState } from "react";
import type { Exercise } from "../types";
import { normalize } from "../utils/text";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Accepts either the exact expected word/phrase, or that same word/phrase
// appearing inside a longer answer (some learners type the whole completed
// sentence instead of just the missing word — both should count as correct).
function fillMatches(input: string, answer: string): boolean {
  const ni = normalize(input);
  const na = normalize(answer);
  if (!ni) return false;
  if (ni === na) return true;
  const inputWords = ni.split(" ");
  const answerWords = na.split(" ");
  for (let i = 0; i <= inputWords.length - answerWords.length; i++) {
    if (answerWords.every((w, j) => inputWords[i + j] === w)) return true;
  }
  return false;
}

export function ExerciseCard({
  exercise,
  onAnswered,
}: {
  exercise: Exercise;
  onAnswered: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  const options = useMemo(
    () => (exercise.options ? shuffle(exercise.options) : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercise.id],
  );

  const check = (value: string) => {
    const isCorrect =
      exercise.type === "choice"
        ? normalize(value) === normalize(exercise.answer)
        : fillMatches(value, exercise.answer);
    setChecked(true);
    setCorrect(isCorrect);
    onAnswered(isCorrect);
  };

  return (
    <div className="rounded-2xl bg-slate-900 p-4">
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {exercise.level}
      </p>
      <p className="mt-1 text-base font-medium text-slate-100">
        {exercise.prompt}
      </p>
      {exercise.hint && !checked && (
        <p className="mt-1 text-xs text-slate-500">Подсказка: {exercise.hint}</p>
      )}

      {exercise.type === "choice" && options && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {options.map((opt) => {
            const isSelected = selected === opt;
            const showCorrect = checked && opt === exercise.answer;
            const showWrong = checked && isSelected && opt !== exercise.answer;
            return (
              <button
                key={opt}
                disabled={checked}
                onClick={() => {
                  setSelected(opt);
                  check(opt);
                }}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  showCorrect
                    ? "border-emerald-500 bg-emerald-500/15 text-emerald-400"
                    : showWrong
                      ? "border-red-500 bg-red-500/15 text-red-400"
                      : isSelected
                        ? "border-slate-500 bg-slate-800 text-slate-100"
                        : "border-slate-700 bg-slate-800/50 text-slate-200"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {(exercise.type === "fill" || exercise.type === "transform") && (
        <div className="mt-4">
          <input
            value={textAnswer}
            disabled={checked}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder="Слово/фраза — или вся фраза целиком"
            className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--accent)] disabled:opacity-60"
          />
          {!checked && (
            <button
              onClick={() => check(textAnswer)}
              disabled={!textAnswer.trim()}
              className="accent-bg mt-2 w-full rounded-lg py-2 text-sm font-semibold disabled:opacity-30"
            >
              Проверить
            </button>
          )}
        </div>
      )}

      {checked && (
        <div
          className={`mt-3 rounded-lg p-3 text-sm ${
            correct
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          <p className="font-semibold">
            {correct ? "Верно!" : `Неверно. Правильный ответ: ${exercise.answer}`}
          </p>
          {exercise.explanation && (
            <p className="mt-1 text-xs text-slate-300">
              {correct ? "" : "Потому что: "}
              {exercise.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
