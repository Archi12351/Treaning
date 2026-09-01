import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { TOPICS, VOCABULARY } from "../data/vocabulary";
import { useProgress } from "../hooks/useProgress";
import { masteryPercent, MASTERY_THRESHOLD } from "../utils/srs";

export function VocabTopics({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();

  return (
    <div>
      <TopBar title="Лексика" />
      <div className="px-4 pt-2">
        <button
          onClick={() => nav({ name: "forms-trainer" })}
          className="flex w-full items-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 p-4 text-left shadow-lg shadow-fuchsia-500/20 active:scale-[0.99]"
        >
          <span className="text-2xl">✍️</span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-white">Тренажёр форм слов</p>
            <p className="text-xs text-white/80">
              Спряжение, множественное число, степени сравнения
            </p>
          </div>
          <span className="text-xl text-white">→</span>
        </button>
      </div>
      <p className="px-4 pb-1 pt-4 text-xs text-slate-500">Темы для карточек:</p>
      <div className="space-y-3 px-4 py-3">
        {TOPICS.map((topic) => {
          const words = VOCABULARY.filter((v) => v.topic === topic.id);
          const mastered = words.filter(
            (w) => masteryPercent(progress.vocabCards[w.id]) >= MASTERY_THRESHOLD,
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
                  className="accent-bg h-full rounded-full"
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
