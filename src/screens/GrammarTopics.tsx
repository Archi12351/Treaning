import { useMemo } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { levelIndex } from "../utils/studyPlan";

export function GrammarTopics({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { grammarTopics } = useLanguageData();
  const sortedTopics = useMemo(
    () => [...grammarTopics].sort((a, b) => levelIndex(a.level) - levelIndex(b.level)),
    [grammarTopics],
  );

  return (
    <div>
      <TopBar title="Грамматика" />
      <div className="px-4 pt-2">
        <button
          onClick={() => nav({ name: "textbook" })}
          className="flex w-full items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 p-4 text-left shadow-lg shadow-sky-500/20 active:scale-[0.99]"
        >
          <span className="text-2xl">📖</span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-white">Учебник A1–C2</p>
            <p className="text-xs text-white/80">
              Все правила и исключения по параграфам, от алфавита
            </p>
          </div>
          <span className="text-xl text-white">→</span>
        </button>
      </div>
      <p className="px-4 pb-1 pt-4 text-xs text-slate-500">
        Или отрабатывайте темы упражнениями, по уровням от A1 до C1:
      </p>
      <div className="space-y-3 px-4 py-3">
        {sortedTopics.map((topic) => {
          const done = progress.grammarProgress[topic.id]?.completed.length ?? 0;
          const total = topic.exercises.length;
          const pct = Math.round((done / total) * 100);
          return (
            <button
              key={topic.id}
              onClick={() => nav({ name: "grammar-detail", topicId: topic.id })}
              className="w-full rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-100">{topic.title}</p>
                  <p className="text-xs text-slate-500">{topic.summary}</p>
                </div>
                <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
                  {topic.level}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-sky-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
