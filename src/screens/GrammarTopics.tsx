import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { GRAMMAR_TOPICS } from "../data/grammar";
import { useProgress } from "../hooks/useProgress";

export function GrammarTopics({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();

  return (
    <div>
      <TopBar title="Грамматика" />
      <div className="space-y-3 px-4 py-4">
        {GRAMMAR_TOPICS.map((topic) => {
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
