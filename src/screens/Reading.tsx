import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { usePremium } from "../hooks/usePremium";
import { useTextToSpeech } from "../hooks/useSpeech";
import { levelIndex } from "../utils/studyPlan";
import { shuffle } from "../utils/answerCheck";
import { TEXTS_DE } from "../data/texts/de";
import { TEXTS_EN } from "../data/texts/en";
import { TEXTS_FR } from "../data/texts/fr";
import type { ReadingText } from "../data/texts/types";
import type { Language } from "../types";

export const TEXTS_BY_LANGUAGE: Record<Language, ReadingText[]> = {
  de: TEXTS_DE,
  en: TEXTS_EN,
  fr: TEXTS_FR,
};

export function ReadingList({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { isLevelLocked } = usePremium();
  const texts = [...TEXTS_BY_LANGUAGE[progress.language]].sort((a, b) => levelIndex(a.level) - levelIndex(b.level));
  return (
    <div>
      <TopBar title="Чтение и аудирование" onBack={() => nav({ name: "home" })} />
      <p className="px-4 pt-3 text-xs leading-relaxed text-slate-500">
        Настоящие тексты по уровням: объявления, статьи и письма из ведомств.
        Читайте или слушайте, нажимайте на предложение, чтобы услышать его, и
        проверяйте понимание вопросами.
      </p>
      <div className="space-y-2.5 px-4 py-3">
        {texts.map((t) => {
          const locked = isLevelLocked(t.level);
          const done = progress.textsRead.includes(t.id);
          return (
            <button
              key={t.id}
              onClick={() => nav(locked ? { name: "paywall" } : { name: "reading-text", id: t.id })}
              className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
            >
              <span className="text-2xl">{t.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-slate-100">
                  {locked && <span className="mr-1">💎</span>}
                  {t.category === "official" && <span className="mr-1 text-xs">🏛️</span>}
                  {t.title}
                </p>
                <p className="text-xs text-slate-500">{t.ru}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">{t.level}</span>
                {done && <span className="text-xs text-emerald-400">✓</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ReadingTextScreen({ id, nav }: { id: string; nav: (r: Route) => void }) {
  const progress = useProgress();
  const text = TEXTS_BY_LANGUAGE[progress.language].find((t) => t.id === id);
  const tts = useTextToSpeech();
  const [listenMode, setListenMode] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [rate, setRate] = useState(0.95);
  const [phase, setPhase] = useState<"read" | "quiz" | "done">("read");
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const shuffledQuestions = useMemo(
    () => (text ? text.questions.map((q) => ({ ...q, options: shuffle(q.options) })) : []),
    [text],
  );

  if (!text) return null;
  const back = () => nav({ name: "reading" });
  const sentences = (p: string) => p.match(/[^.!?]+[.!?]+["»]?\s*|[^.!?]+$/g) ?? [p];
  const playAll = () => tts.speak(text.paragraphs.join(" "), rate);

  if (phase === "done") {
    const pct = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-6xl">{pct === 100 ? "🏆" : pct >= 50 ? "📖" : "🌱"}</span>
        <h2 className="mt-4 text-2xl font-bold text-slate-50">Понимание: {pct}%</h2>
        <p className="mt-2 text-slate-400">
          {score} из {shuffledQuestions.length} верно{listenMode ? " — на слух!" : ""}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3">
          <button onClick={() => { setPhase("read"); setQIndex(0); setScore(0); setPicked(null); }} className="accent-bg rounded-xl py-3 font-semibold">
            Перечитать текст
          </button>
          <button onClick={back} className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200">
            К текстам
          </button>
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    const q = shuffledQuestions[qIndex];
    return (
      <div>
        <TopBar title="Вопросы" onBack={() => setPhase("read")} right={<span className="text-xs text-slate-500">{qIndex + 1}/{shuffledQuestions.length}</span>} />
        <div className="space-y-3 px-4 py-5">
          <p className="text-lg font-semibold text-slate-100">{q.q}</p>
          {q.options.map((o) => {
            const state = !picked ? "" : o === q.answer ? "border-emerald-500 bg-emerald-500/10" : picked === o ? "border-red-500 bg-red-500/10" : "opacity-50";
            return (
              <button
                key={o}
                disabled={!!picked}
                onClick={() => {
                  setPicked(o);
                  if (o === q.answer) {
                    setScore((s) => s + 1);
                    progress.addXp(3);
                  }
                }}
                className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-left text-sm text-slate-100 ${state}`}
              >
                {o}
              </button>
            );
          })}
          {picked && (
            <button
              onClick={() => {
                setPicked(null);
                if (qIndex + 1 >= shuffledQuestions.length) {
                  progress.markTextRead(text.id);
                  progress.bumpDaily("reading");
                  progress.incrementSessions();
                  setPhase("done");
                } else setQIndex(qIndex + 1);
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

  const hidden = listenMode && !revealed;

  return (
    <div>
      <TopBar title={text.title} onBack={back} />
      <div className="space-y-4 px-4 py-4">
        <div className="flex gap-2">
          {[
            [false, "📖 Читать"],
            [true, "🎧 Слушать"],
          ].map(([v, label]) => (
            <button
              key={String(v)}
              onClick={() => { setListenMode(v as boolean); setRevealed(false); }}
              className={`flex-1 rounded-full py-2 text-xs font-medium ${listenMode === v ? "accent-bg" : "bg-slate-800 text-slate-300"}`}
            >
              {label as string}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-900 p-3">
          <button onClick={tts.speaking ? tts.stop : playAll} className="accent-bg rounded-full px-4 py-2 text-sm font-semibold">
            {tts.speaking ? "⏹ Стоп" : "▶ Слушать"}
          </button>
          <div className="ml-auto flex gap-1">
            {[0.75, 0.95, 1.1].map((r) => (
              <button key={r} onClick={() => setRate(r)} className={`rounded-md px-2 py-1 text-[11px] ${rate === r ? "bg-slate-700 text-white" : "text-slate-500"}`}>
                {r === 0.75 ? "медл." : r === 0.95 ? "норм." : "быстр."}
              </button>
            ))}
          </div>
        </div>

        {hidden ? (
          <div className="rounded-2xl bg-slate-900 p-6 text-center">
            <p className="text-4xl">🎧</p>
            <p className="mt-2 text-sm text-slate-300">
              Послушайте текст 1–2 раза и попробуйте ответить на вопросы, не подглядывая.
            </p>
            <button onClick={() => setRevealed(true)} className="mt-3 text-xs text-slate-400 underline">
              Показать текст
            </button>
          </div>
        ) : (
          <div className="space-y-3 rounded-2xl bg-slate-900 p-4">
            {text.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-slate-100">
                {sentences(p).map((s, j) => (
                  <span key={j} onClick={() => tts.speak(s.trim(), rate)} className="cursor-pointer rounded active:bg-[color:var(--accent)]/20">
                    {s}
                  </span>
                ))}
              </p>
            ))}
            <p className="text-[10px] text-slate-600">Нажмите на предложение, чтобы услышать его.</p>
          </div>
        )}

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Ключевые слова</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {text.glossary.map((g) => (
              <button key={g.de} onClick={() => tts.speak(g.de, 0.9)} className="rounded-lg bg-slate-800 px-2.5 py-1.5 text-left">
                <span className="text-xs font-medium text-slate-100">{g.de}</span>
                <span className="block text-[10px] text-slate-500">{g.ru}</span>
              </button>
            ))}
          </div>
        </div>

        <button onClick={() => setPhase("quiz")} className="accent-bg w-full rounded-xl py-3 font-semibold">
          Проверить понимание ({text.questions.length} вопроса)
        </button>
      </div>
    </div>
  );
}
