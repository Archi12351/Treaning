import { useMemo } from "react";
import type { Route } from "../App";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { useAIAccess } from "../hooks/useAIAccess";
import { isDue } from "../utils/srs";
import { questsForToday, type Quest } from "../utils/engagement";
import { DUE_TOPIC } from "../screens/VocabTrainer";

// «Сегодня» on the home screen: daily XP goal ring, streak, three daily
// quests, and the two highest-value actions — due reviews and mistakes.
export function TodayPanel({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { vocabulary } = useLanguageData();
  const ai = useAIAccess();
  const today = new Date().toISOString().slice(0, 10);

  const dueCount = useMemo(
    () => vocabulary.filter((v) => progress.vocabCards[v.id] && isDue(progress.vocabCards[v.id])).length,
    [vocabulary, progress.vocabCards],
  );
  const mistakesCount = Object.keys(progress.mistakes).length;
  const quests = questsForToday(today, { hasMistakes: mistakesCount > 0, aiAvailable: ai.available });
  const doneQuests = quests.filter((q) => (progress.todayCounts[q.key] ?? 0) >= q.target).length;

  const pct = Math.min(1, progress.todayXp / progress.dailyGoalXp);
  const R = 30;
  const C = 2 * Math.PI * R;

  const openQuest = (q: Quest) => {
    switch (q.route) {
      case "vocab-due":
        return nav({ name: "vocab-trainer", topic: DUE_TOPIC });
      case "vocab-topics":
        return nav(dueCount > 0 ? { name: "vocab-trainer", topic: DUE_TOPIC } : { name: "vocab-topics" });
      case "grammar-topics":
        return nav({ name: "grammar-topics" });
      case "reading":
        return nav({ name: "reading" });
      case "conversations":
        return nav({ name: "conversations" });
      case "writing":
        return nav({ name: "writing" });
      case "mistakes":
        return nav({ name: "mistakes" });
    }
  };

  return (
    <div className="mt-5 rounded-3xl bg-slate-900 p-4">
      <div className="flex items-center gap-4">
        <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0">
          <circle cx="38" cy="38" r={R} stroke="rgb(30 41 59)" strokeWidth="8" fill="none" />
          <circle
            cx="38"
            cy="38"
            r={R}
            stroke="var(--accent)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - pct)}
            transform="rotate(-90 38 38)"
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
          <text x="38" y="36" textAnchor="middle" className="fill-slate-50 text-[15px] font-bold">
            {progress.todayXp}
          </text>
          <text x="38" y="50" textAnchor="middle" className="fill-slate-500 text-[9px]">
            из {progress.dailyGoalXp} XP
          </text>
        </svg>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-100">
            {pct >= 1 ? "Цель дня выполнена! 🎯" : "Цель дня"}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            🔥 {progress.streakCount} {progress.streakCount === 1 ? "день" : "дн."} подряд
            {(progress.bestStreak ?? 0) > progress.streakCount && ` · рекорд ${progress.bestStreak}`}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">Задания: {doneQuests}/3 выполнено</p>
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        {quests.map((q) => {
          const have = Math.min(progress.todayCounts[q.key] ?? 0, q.target);
          const done = have >= q.target;
          return (
            <button
              key={q.id}
              onClick={() => openQuest(q)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left ${done ? "bg-emerald-500/10" : "bg-slate-800/60 active:bg-slate-800"}`}
            >
              <span className="text-lg">{done ? "✅" : q.icon}</span>
              <div className="min-w-0 flex-1">
                <p className={`text-xs font-medium ${done ? "text-emerald-300 line-through" : "text-slate-200"}`}>{q.title}</p>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-700">
                  <div className="accent-bg h-full rounded-full" style={{ width: `${(have / q.target) * 100}%` }} />
                </div>
              </div>
              <span className="text-[11px] text-slate-500">
                {have}/{q.target}
              </span>
            </button>
          );
        })}
      </div>

      {(dueCount > 0 || mistakesCount > 0) && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {dueCount > 0 && (
            <button
              onClick={() => nav({ name: "vocab-trainer", topic: DUE_TOPIC })}
              className="rounded-xl bg-sky-500/15 p-3 text-left active:scale-[0.98]"
            >
              <p className="text-lg font-bold text-sky-300">{dueCount}</p>
              <p className="text-[11px] text-sky-200/80">слов пора повторить</p>
            </button>
          )}
          {mistakesCount > 0 && (
            <button
              onClick={() => nav({ name: "mistakes" })}
              className="rounded-xl bg-rose-500/15 p-3 text-left active:scale-[0.98]"
            >
              <p className="text-lg font-bold text-rose-300">{mistakesCount}</p>
              <p className="text-[11px] text-rose-200/80">ошибок на разбор</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
