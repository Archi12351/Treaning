import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { TOPICS, VOCABULARY } from "../data/vocabulary";
import { useProgress } from "../hooks/useProgress";
import { masteryPercent } from "../utils/srs";

export function VocabTopics({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();

  return (
    <div>
      <TopBar title="Лексика" />
      <div className="space-y-3 px-4 py-4">
        {TOPICS.map((topic) => {
          const words = VOCABULARY.filter((v) => v.topic === topic.id);
          const mastered = words.filter(
            (w) => masteryPercent(progress.vocabCards[w.id]) >= 80,
          ).length;
          const pct = Math.round((mastered / words.length) * 100);
          return (
            <button
              key={topic.id}
              onClick={() => nav({ name: "vocab-trainer", topic: topic.id })}
              className="w-full rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-100">{topic.title}</p>
                  <p className="text-xs text-slate-500">{topic.ru}</p>
                </div>
                <span className="text-xs text-slate-500">
                  {mastered}/{words.length}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-emerald-500"
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
