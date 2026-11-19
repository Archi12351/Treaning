import { useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { LEVEL_ORDER, levelIndex } from "../utils/studyPlan";
import { usePremium } from "../hooks/usePremium";

type Filter = "all" | "official" | "everyday";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "official", label: "🏛️ Госуслуги" },
  { id: "everyday", label: "☕ Бытовые" },
];

export function ConversationsList({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { conversations } = useLanguageData();
  const { isLevelLocked } = usePremium();
  const maxUnlockedIdx = Math.min(levelIndex(progress.level) + 1, LEVEL_ORDER.length - 1);
  const [filter, setFilter] = useState<Filter>("all");
  const officialCount = conversations.filter((c) => c.category === "official").length;
  const sorted = [...conversations]
    .filter((c) =>
      filter === "all"
        ? true
        : filter === "official"
          ? c.category === "official"
          : c.category !== "official",
    )
    .sort((a, b) => levelIndex(a.level) - levelIndex(b.level));

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
        Или пройдите готовый сценарий: слушайте речь и отвечайте
        голосом или выбором фразы.
      </p>
      <p className="px-4 pb-1 pt-3 text-[11px] text-slate-500">
        Диалоги открываются по мере роста уровня — сейчас доступны до{" "}
        {LEVEL_ORDER[maxUnlockedIdx]}.
      </p>
      {officialCount > 0 && (
        <div className="flex gap-2 overflow-x-auto px-4 pt-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${
                filter === f.id ? "accent-bg" : "bg-slate-800 text-slate-300"
              }`}
            >
              {f.label}
              {f.id === "official" && ` · ${officialCount}`}
            </button>
          ))}
        </div>
      )}
      {filter === "official" && (
        <p className="px-4 pt-2 text-[11px] leading-relaxed text-slate-500">
          Сценарии в госучреждениях и инстанциях: регистрация, ВНЖ, налоговая,
          страховка, пособия, банк, полиция. Лексика к ним — в темах словаря
          «Госучреждения», «ВНЖ и миграция», «Налоги и страхование».
        </p>
      )}
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
                <p className="truncate font-semibold text-slate-100">
                  {isLevelLocked(c.level) && <span className="mr-1">💎</span>}
                  {c.category === "official" && <span className="mr-1 text-xs">🏛️</span>}
                  {c.title}
                </p>
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
