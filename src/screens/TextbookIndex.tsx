import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { TEXTBOOK_CHAPTERS, TEXTBOOK_PARAGRAPHS } from "../data/textbook";
import { useProgress } from "../hooks/useProgress";

export function TextbookIndex({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return TEXTBOOK_PARAGRAPHS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.body.some((b) => b.toLowerCase().includes(q)) ||
        p.examples?.some((e) => e.de.toLowerCase().includes(q)),
    ).slice(0, 20);
  }, [query]);

  return (
    <div>
      <TopBar title="Учебник A1–C2" onBack={() => nav({ name: "home" })} />
      <div className="px-4 py-4">
        <p className="text-xs text-slate-500">
          Полный грамматический справочник: от алфавита до продвинутых
          конструкций, по параграфам, с исключениями и таблицами.
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по учебнику (например: Passiv, Perfekt, Artikel)..."
          className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-slate-100 outline-none focus:border-emerald-500"
        />

        {query.trim() ? (
          <div className="mt-4 space-y-2">
            {searchResults.length === 0 && (
              <p className="text-sm text-slate-500">Ничего не найдено.</p>
            )}
            {searchResults.map((p) => {
              const chapter = TEXTBOOK_CHAPTERS.find((c) => c.id === p.chapterId);
              return (
                <button
                  key={p.id}
                  onClick={() => nav({ name: "textbook-chapter", chapterId: p.chapterId })}
                  className="w-full rounded-xl bg-slate-900 p-3.5 text-left active:bg-slate-800"
                >
                  <p className="text-[11px] text-slate-500">
                    § {p.number} · {chapter?.title}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-100">{p.title}</p>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            {TEXTBOOK_CHAPTERS.map((c) => {
              const count = TEXTBOOK_PARAGRAPHS.filter((p) => p.chapterId === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => nav({ name: "textbook-chapter", chapterId: c.id })}
                  className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-3.5 text-left active:bg-slate-800"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-emerald-400">
                    {c.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-100">{c.title}</p>
                    <p className="text-[11px] text-slate-500">
                      {c.levelRange} · {count} {count === 1 ? "параграф" : "параграфа"}
                    </p>
                  </div>
                  {progress.chaptersRead.includes(c.id) && (
                    <span className="text-xs text-emerald-400">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
