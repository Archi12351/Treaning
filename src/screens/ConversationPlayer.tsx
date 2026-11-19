import { useEffect, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { useSpeechRecognition, useTextToSpeech } from "../hooks/useSpeech";
import { matchesAny } from "../utils/text";
import { useAIAccess } from "../hooks/useAIAccess";
import { answerCheckPrompt, parseJsonObject, runAITask } from "../utils/aiClient";

export function ConversationPlayer({
  id,
  nav,
}: {
  id: string;
  nav: (r: Route) => void;
}) {
  const { conversations } = useLanguageData();
  const conversation = conversations.find((c) => c.id === id);
  const progress = useProgress();
  const { speak } = useTextToSpeech();
  const { supported, listening, transcript, start } = useSpeechRecognition();

  const [revealed, setRevealed] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [attemptResult, setAttemptResult] = useState<"ok" | "retry" | null>(null);
  const [showTranslations, setShowTranslations] = useState(true);
  const [typed, setTyped] = useState("");
  const [aiVerdict, setAiVerdict] = useState<null | "checking" | { ok: boolean; feedback: string }>(null);
  const [correctLines, setCorrectLines] = useState(0);
  const [creditedLine, setCreditedLine] = useState(-1);
  const ai = useAIAccess();

  const credit = () => {
    if (creditedLine === currentIndex) return;
    setCreditedLine(currentIndex);
    setCorrectLines((c) => c + 1);
    progress.addXp(3);
  };

  // Checks a spoken or typed answer: exact-ish match first, then — if it
  // didn't match the scripted answer — asks the AI whether it is still an
  // appropriate reply. Real conversations have many right answers.
  const evaluate = async (answer: string) => {
    if (!current || current.speaker !== "user" || !answer.trim()) return;
    const candidates = [current.de, ...(current.alternatives ?? [])];
    const { matched } = matchesAny(answer, candidates, 0.65);
    if (matched) {
      setAttemptResult("ok");
      setShowAnswer(true);
      setAiVerdict(null);
      credit();
      return;
    }
    if (!ai.available) {
      setAttemptResult("retry");
      return;
    }
    setAttemptResult(null);
    setAiVerdict("checking");
    try {
      const context = lines[currentIndex - 1]?.de ?? "";
      const raw = await runAITask(
        ai.config,
        answerCheckPrompt(progress.language, context, current.de, answer),
        { kind: "answer", language: progress.language, context, expected: current.de, answer },
        300,
      );
      const verdict = parseJsonObject<{ ok: boolean; feedback: string }>(raw);
      setAiVerdict(verdict);
      if (verdict.ok) {
        setShowAnswer(true);
        credit();
      }
    } catch {
      setAiVerdict(null);
      setAttemptResult("retry");
    }
  };

  const lines = conversation?.lines ?? [];
  const total = lines.length;
  const currentIndex = revealed - 1;
  const current = lines[currentIndex];
  const finished = revealed >= total;

  useEffect(() => {
    if (current?.speaker === "bot") {
      const t = setTimeout(() => speak(current.de), 250);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    if (finished) {
      progress.markConversationDone(id);
      progress.bumpDaily("dialog");
      progress.addXp(10);
      progress.incrementSessions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  useEffect(() => {
    if (!listening && transcript && current?.speaker === "user") void evaluate(transcript);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  if (!conversation) return null;

  const next = () => {
    setShowAnswer(false);
    setAttemptResult(null);
    setAiVerdict(null);
    setTyped("");
    setRevealed((r) => Math.min(r + 1, total));
  };

  const restart = () => {
    setRevealed(1);
    setShowAnswer(false);
    setAttemptResult(null);
    setAiVerdict(null);
    setCorrectLines(0);
    setCreditedLine(-1);
  };

  return (
    <div className="flex flex-col">
      <TopBar
        title={conversation.title}
        onBack={() => nav({ name: "conversations" })}
        right={
          <button
            onClick={() => setShowTranslations((s) => !s)}
            className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300"
          >
            {showTranslations ? "RU вкл" : "RU выкл"}
          </button>
        }
      />
      <div className="flex-1 space-y-3 px-4 py-4">
        {lines.slice(0, revealed).map((line, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${line.speaker === "bot" ? "justify-start" : "flex-row-reverse justify-start"}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-base">
              {line.speaker === "bot" ? conversation.avatar : progress.userAvatar}
            </span>
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 ${
                line.speaker === "bot"
                  ? "rounded-tl-sm bg-slate-800"
                  : "accent-soft-bg rounded-tr-sm"
              }`}
            >
              <div className="flex items-center gap-2">
                <p className="text-sm text-slate-100">
                  {i === currentIndex && line.speaker === "user" && !showAnswer
                    ? "•••••••"
                    : line.de}
                </p>
                <SpeakButton text={line.de} size="sm" />
              </div>
              {showTranslations && (i !== currentIndex || showAnswer || line.speaker === "bot") && (
                <p className="mt-0.5 text-xs text-slate-400">{line.ru}</p>
              )}
            </div>
          </div>
        ))}

        {!finished && current?.speaker === "user" && (
          <div className="rounded-2xl bg-slate-900 p-3.5">
            <p className="text-xs text-slate-400">
              Ваша реплика ({current.ru}). Скажите вслух {progress.language === "en" ? "по-английски" : progress.language === "fr" ? "по-французски" : "по-немецки"} или
              посмотрите ответ.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {supported && (
                <button
                  onClick={() => {
                    setAttemptResult(null);
                    start();
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium ${
                    listening
                      ? "recording-pulse bg-red-500/20 text-red-400"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  🎤 {listening ? "Слушаю..." : "Сказать"}
                </button>
              )}
              <button
                onClick={() => setShowAnswer((s) => !s)}
                className="rounded-full bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-300"
              >
                {showAnswer ? "Скрыть ответ" : "Показать ответ"}
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <input
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && void evaluate(typed)}
                placeholder="…или напишите ответ"
                autoCapitalize="off"
                spellCheck={false}
                className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--accent)]"
              />
              <button
                onClick={() => void evaluate(typed)}
                disabled={!typed.trim()}
                className="accent-bg rounded-lg px-3 text-sm font-semibold disabled:opacity-40"
              >
                ✓
              </button>
            </div>
            {transcript && (
              <p className="mt-2 text-xs text-slate-500">Вы сказали: «{transcript}»</p>
            )}
            {aiVerdict === "checking" && (
              <p className="mt-1 animate-pulse text-xs text-violet-300">✨ ИИ проверяет смысл ответа…</p>
            )}
            {aiVerdict && aiVerdict !== "checking" && (
              <p className={`mt-1 text-xs font-medium ${aiVerdict.ok ? "text-emerald-400" : "text-amber-400"}`}>
                {aiVerdict.ok ? "✨ Подходит! " : "✨ Не совсем: "}
                <span className="font-normal text-slate-300">{aiVerdict.feedback}</span>
              </p>
            )}
            {attemptResult === "ok" && (
              <p className="mt-1 text-xs font-medium text-emerald-400">Отлично! ✓</p>
            )}
            {attemptResult === "retry" && (
              <p className="mt-1 text-xs font-medium text-amber-400">
                Не совсем совпало — попробуйте ещё раз или посмотрите ответ
              </p>
            )}
          </div>
        )}

        {!finished && (
          <button
            onClick={next}
            className="w-full rounded-xl bg-slate-800 py-3 text-sm font-semibold text-slate-200"
          >
            {current?.speaker === "bot" ? "Далее →" : "Продолжить →"}
          </button>
        )}

        {finished && (
          <div className="flex flex-col items-center gap-3 pt-4 text-center">
            <span className="text-4xl">🎉</span>
            <p className="font-semibold text-slate-100">Диалог завершён</p>
            <p className="text-sm text-slate-400">
              Сказано самостоятельно: {correctLines} из {lines.filter((l) => l.speaker === "user").length} реплик
            </p>
            <div className="flex w-full flex-col gap-3">
              <button
                onClick={restart}
                className="accent-bg rounded-xl py-3 font-semibold"
              >
                Пройти ещё раз
              </button>
              <button
                onClick={() => nav({ name: "conversations" })}
                className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200"
              >
                К списку диалогов
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
