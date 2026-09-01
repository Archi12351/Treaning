import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { CONVERSATIONS } from "../data/conversations";
import { useProgress } from "../hooks/useProgress";
import { LEVEL_ORDER, levelIndex } from "../utils/studyPlan";

export function ConversationsList({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const maxUnlockedIdx = Math.min(levelIndex(progress.level) + 1, LEVEL_ORDER.length - 1);
  const sorted = [...CONVERSATIONS].sort(
    (a, b) => levelIndex(a.level) - levelIndex(b.level),
  );

  return (
    <div>
      <TopBar title="Разговорная практика" />
      <div className="px-4 pt-2">
        <button
          onClick={() => nav({ name: "ai-conversation" })}
          className="flex w-full items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 text-left shadow-lg shadow-violet-500/20 active:scale-[0.99]"
        >
          <span className="text-2xl">🤖</span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-white">AI-собеседник (голос)</p>
            <p className="text-xs text-white/80">
              Живой разговор на любую тему с настоящим ИИ
            </p>
          </div>
          <span className="text-xl text-white">→</span>
        </button>
      </div>
      <p className="px-4 pb-2 pt-4 text-xs text-slate-500">
        Или пройдите готовый сценарий: слушайте немецкую речь и отвечайте
        голосом или выбором фразы.
      </p>
      <p className="px-4 pb-1 pt-3 text-[11px] text-slate-500">
        Диалоги открываются по мере роста уровня — сейчас доступны до{" "}
        {LEVEL_ORDER[maxUnlockedIdx]}.
      </p>
      <div className="space-y-3 px-4 py-2">
        {sorted.map((c) => {
          const done = progress.conversationsDone.includes(c.id);
          const locked = levelIndex(c.level) > maxUnlockedIdx;
          return (
            <button
              key={c.id}
              onClick={() => !locked && nav({ name: "conversation-player", id: c.id })}
              disabled={locked}
              className={`flex w-full items-center gap-3 rounded-xl p-4 text-left ${
                locked
                  ? "bg-slate-900/40 opacity-50"
                  : "bg-slate-900 active:bg-slate-800"
              }`}
            >
              <span className="text-2xl">{locked ? "🔒" : c.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-slate-100">{c.title}</p>
                <p className="text-xs text-slate-500">
                  {locked ? `Откроется на уровне ${c.level}` : c.ru}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
                  {c.level}
                </span>
                {done && <span className="text-xs text-emerald-400">✓</span>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
