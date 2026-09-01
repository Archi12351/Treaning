import { useEffect, useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { TOPICS, VOCABULARY } from "../data/vocabulary";
import { useProgress } from "../hooks/useProgress";
import { isDue } from "../utils/srs";
import { useSpeechRecognition } from "../hooks/useSpeech";
import { matchesAny } from "../utils/text";
import type { Grade } from "../types";

export function VocabTrainer({
  topic,
  nav,
}: {
  topic: string;
  nav: (r: Route) => void;
}) {
  const progress = useProgress();
  const meta = TOPICS.find((t) => t.id === topic);

  const words = useMemo(() => {
    const all = VOCABULARY.filter((v) => v.topic === topic);
    const due = all.filter((v) => {
      const card = progress.vocabCards[v.id];
      return !card || isDue(card);
    });
    const rest = all.filter((v) => !due.includes(v));
    return [...due, ...rest];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const { supported, listening, transcript, start } = useSpeechRecognition();
  const [speechResult, setSpeechResult] = useState<"ok" | "retry" | null>(null);

  const current = words[index];

  const grade = (g: Grade) => {
    if (!current) return;
    progress.reviewVocab(current.id, g);
    if (g >= 2) {
      setSessionCorrect((c) => c + 1);
      progress.addXp(2);
    }
    setSpeechResult(null);
    if (index + 1 >= words.length) {
      setFinished(true);
      progress.incrementSessions();
    } else {
      setIndex(index + 1);
      setFlipped(false);
    }
  };

  const tryPronounce = () => {
    setSpeechResult(null);
    start();
  };

  useEffect(() => {
    if (!listening && transcript && current) {
      const { matched } = matchesAny(transcript, [current.de], 0.75);
      setSpeechResult(matched ? "ok" : "retry");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  if (!meta) return null;

  if (words.length === 0) {
    return (
      <div>
        <TopBar title={meta.title} onBack={() => nav({ name: "vocab-topics" })} />
        <p className="p-6 text-center text-slate-400">Нет слов в этой теме.</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-5xl">🎉</span>
        <h2 className="mt-4 text-xl font-bold text-slate-50">Сессия завершена</h2>
        <p className="mt-2 text-slate-400">
          Правильно: {sessionCorrect} из {words.length}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button
            onClick={() => {
              setIndex(0);
              setFlipped(false);
              setSessionCorrect(0);
              setFinished(false);
            }}
            className="rounded-xl bg-emerald-500 py-3 font-semibold text-emerald-950"
          >
            Повторить ещё раз
          </button>
          <button
            onClick={() => nav({ name: "vocab-topics" })}
            className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
          >
            К темам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <TopBar
        title={meta.title}
        onBack={() => nav({ name: "vocab-topics" })}
        right={
          <span className="text-xs text-slate-500">
            {index + 1}/{words.length}
          </span>
        }
      />
      <div className="flex flex-1 flex-col px-4 py-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${(index / words.length) * 100}%` }}
          />
        </div>

        <div
          className={`flip-card mt-8 h-64 w-full cursor-pointer ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped((f) => !f)}
        >
          <div className="flip-card-inner relative h-full w-full">
            <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-slate-900 p-6 text-center">
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
                {current.level}
              </span>
              <p className="text-2xl font-bold text-slate-50">{current.de}</p>
              <div onClick={(e) => e.stopPropagation()}>
                <SpeakButton text={current.de} />
              </div>
              <p className="text-xs text-slate-500">Нажми, чтобы перевернуть</p>
            </div>
            <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-emerald-950/40 p-6 text-center">
              <p className="text-xl font-semibold text-emerald-300">{current.ru}</p>
              <p className="mt-2 text-sm text-slate-200">{current.exampleDe}</p>
              <p className="text-xs text-slate-400">{current.exampleRu}</p>
            </div>
          </div>
        </div>

        {supported && (
          <div className="mt-5 flex flex-col items-center gap-2">
            <button
              onClick={tryPronounce}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                listening
                  ? "recording-pulse bg-red-500/20 text-red-400"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              🎤 {listening ? "Слушаю..." : "Повторить вслух"}
            </button>
            {transcript && (
              <p className="text-xs text-slate-500">Вы сказали: «{transcript}»</p>
            )}
            {speechResult === "ok" && (
              <p className="text-xs font-medium text-emerald-400">Отлично! ✓</p>
            )}
            {speechResult === "retry" && (
              <p className="text-xs font-medium text-amber-400">
                Похоже, но попробуй ещё раз
              </p>
            )}
          </div>
        )}

        <div className="mt-auto grid grid-cols-4 gap-2 pt-6">
          <GradeButton label="Забыл" color="bg-red-500/15 text-red-400" onClick={() => grade(0)} disabled={!flipped} />
          <GradeButton label="Сложно" color="bg-amber-500/15 text-amber-400" onClick={() => grade(1)} disabled={!flipped} />
          <GradeButton label="Хорошо" color="bg-sky-500/15 text-sky-400" onClick={() => grade(2)} disabled={!flipped} />
          <GradeButton label="Легко" color="bg-emerald-500/15 text-emerald-400" onClick={() => grade(3)} disabled={!flipped} />
        </div>
      </div>
    </div>
  );
}

function GradeButton({
  label,
  color,
  onClick,
  disabled,
}: {
  label: string;
  color: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl py-3 text-xs font-semibold ${color} disabled:opacity-30`}
    >
      {label}
    </button>
  );
}
