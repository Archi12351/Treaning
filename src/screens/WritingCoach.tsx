import { useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { useProgress } from "../hooks/useProgress";
import { usePremium } from "../hooks/usePremium";
import { useAIAccess } from "../hooks/useAIAccess";
import { WRITING_TASKS, type WritingTask } from "../data/writingTasks";
import { levelIndex } from "../utils/studyPlan";
import { parseJsonObject, runAITask, writingFeedbackPrompt } from "../utils/aiClient";

interface Feedback {
  score: number;
  estimatedLevel?: string;
  corrected: string;
  mistakes: { wrong: string; right: string; why: string }[];
  praise?: string;
  tips?: string[];
  model?: string;
}

const DRAFT_KEY = "movingua-writing-drafts-v1";

function loadDraft(id: string): string {
  try {
    return JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}")[id] ?? "";
  } catch {
    return "";
  }
}
function saveDraft(id: string, text: string) {
  try {
    const all = JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}");
    all[id] = text;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(all));
  } catch {
    // ignore
  }
}

export function WritingCoach({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { isLevelLocked } = usePremium();
  const [task, setTask] = useState<WritingTask | null>(null);

  if (task) return <WritingSession task={task} onExit={() => setTask(null)} nav={nav} />;

  const tasks = [...WRITING_TASKS].sort((a, b) => levelIndex(a.level) - levelIndex(b.level));
  return (
    <div>
      <TopBar title="Письмо с ИИ-наставником" onBack={() => nav({ name: "home" })} />
      <p className="px-4 pt-3 text-xs leading-relaxed text-slate-500">
        Пишете текст — ИИ-преподаватель исправляет ошибки, объясняет их по-русски,
        оценивает работу и показывает, как написал бы носитель. Выполнено работ:{" "}
        {progress.writingsDone}.
      </p>
      <div className="space-y-2.5 px-4 py-3">
        {tasks.map((t) => {
          const locked = isLevelLocked(t.level);
          return (
            <button
              key={t.id}
              onClick={() => (locked ? nav({ name: "paywall" }) : setTask(t))}
              className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
            >
              <span className="text-2xl">{t.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-slate-100">
                  {locked && <span className="mr-1">💎</span>}
                  {t.official && <span className="mr-1 text-xs">🏛️</span>}
                  {t.title}
                </p>
                <p className="line-clamp-2 text-xs text-slate-500">{t.task}</p>
              </div>
              <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">{t.level}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WritingSession({ task, onExit, nav }: { task: WritingTask; onExit: () => void; nav: (r: Route) => void }) {
  const progress = useProgress();
  const ai = useAIAccess();
  const [text, setText] = useState(() => loadDraft(task.id));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fb, setFb] = useState<Feedback | null>(null);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const check = async () => {
    setLoading(true);
    setError(null);
    try {
      const raw = await runAITask(
        ai.config,
        writingFeedbackPrompt(progress.language, task.level, task.task, text),
        { kind: "writing", language: progress.language, level: task.level, task: task.task, text },
        2500,
      );
      const parsed = parseJsonObject<Feedback>(raw);
      setFb({ ...parsed, mistakes: parsed.mistakes ?? [], tips: parsed.tips ?? [] });
      progress.recordWriting();
      progress.addXp(Math.max(5, Math.round((parsed.score ?? 50) / 5)));
      progress.incrementSessions();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Не удалось проверить текст.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TopBar title={task.title} onBack={onExit} />
      <div className="space-y-4 px-4 py-4">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-[11px] uppercase tracking-wide text-slate-500">Задание · {task.level} · от {task.minWords} слов</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-200">{task.task}</p>
        </div>

        {!fb && (
          <>
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                saveDraft(task.id, e.target.value);
              }}
              rows={10}
              placeholder="Пишите здесь…"
              spellCheck={false}
              className="w-full rounded-2xl border border-slate-700 bg-slate-800/60 p-4 text-[15px] leading-relaxed text-slate-100 outline-none focus:border-[color:var(--accent)]"
            />
            <p className={`text-right text-xs ${words >= task.minWords ? "text-emerald-400" : "text-slate-500"}`}>
              {words} / {task.minWords} слов
            </p>
            {ai.available ? (
              <button
                onClick={() => void check()}
                disabled={loading || words < Math.min(10, task.minWords)}
                className="accent-bg w-full rounded-xl py-3.5 font-semibold disabled:opacity-40"
              >
                {loading ? "ИИ-преподаватель читает ваш текст…" : "✨ Проверить с ИИ"}
              </button>
            ) : (
              <button
                onClick={() => nav({ name: ai.needsPremium ? "paywall" : "settings" })}
                className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 py-3.5 font-semibold text-white"
              >
                {ai.needsPremium ? "💎 Проверка ИИ — в Premium" : "Подключите ИИ в настройках"}
              </button>
            )}
            {error && <p className="text-sm text-rose-300">{error}</p>}
          </>
        )}

        {fb && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-sky-600/30 to-violet-600/30 p-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xl font-bold text-white">
                {fb.score}
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  {fb.score >= 85 ? "Отлично!" : fb.score >= 60 ? "Хорошо!" : "Есть над чем поработать"}
                </p>
                {fb.estimatedLevel && <p className="text-xs text-slate-300">Уровень текста: ~{fb.estimatedLevel}</p>}
                {fb.praise && <p className="mt-1 text-xs text-slate-300">👍 {fb.praise}</p>}
              </div>
            </div>

            {fb.mistakes.length > 0 && (
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Ошибки ({fb.mistakes.length})</p>
                <ul className="mt-2 space-y-3">
                  {fb.mistakes.map((m, i) => (
                    <li key={i} className="text-sm">
                      <span className="text-red-300 line-through">{m.wrong}</span>
                      <span className="mx-1.5 text-slate-500">→</span>
                      <span className="font-semibold text-emerald-300">{m.right}</span>
                      <p className="mt-0.5 text-xs text-slate-400">{m.why}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl bg-slate-900 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Исправленный текст</p>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-100">{fb.corrected}</p>
            </div>

            {fb.model && (
              <div className="rounded-2xl bg-slate-900 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Как написал бы носитель</p>
                  <SpeakButton text={fb.model} size="sm" />
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-200">{fb.model}</p>
              </div>
            )}

            {fb.tips && fb.tips.length > 0 && (
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Советы</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {fb.tips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-2">
              <button onClick={() => setFb(null)} className="flex-1 rounded-xl bg-slate-800 py-3 text-sm font-semibold text-slate-200">
                Улучшить текст
              </button>
              <button onClick={onExit} className="accent-bg flex-1 rounded-xl py-3 text-sm font-semibold">
                Другое задание
              </button>
            </div>
            <p className="text-[10px] text-slate-600">Проверку выполняет ИИ — он может ошибаться в редких случаях.</p>
          </div>
        )}
      </div>
    </div>
  );
}
