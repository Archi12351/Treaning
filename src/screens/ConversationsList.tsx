import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { CONVERSATIONS } from "../data/conversations";
import { useProgress } from "../hooks/useProgress";

export function ConversationsList({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();

  return (
    <div>
      <TopBar title="Разговорная практика" />
      <p className="px-4 pb-2 text-xs text-slate-500">
        Реальные повседневные ситуации. Слушайте немецкую речь и отвечайте
        голосом или выбором фразы.
      </p>
      <div className="space-y-3 px-4 py-2">
        {CONVERSATIONS.map((c) => {
          const done = progress.conversationsDone.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => nav({ name: "conversation-player", id: c.id })}
              className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 text-left active:bg-slate-800"
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-slate-100">{c.title}</p>
                <p className="text-xs text-slate-500">{c.ru}</p>
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
