import { useEffect } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";

export function TextbookChapter({
  chapterId,
  nav,
}: {
  chapterId: string;
  nav: (r: Route) => void;
}) {
  const progress = useProgress();
  const { textbookChapters, textbookParagraphs } = useLanguageData();
  const chapter = textbookChapters.find((c) => c.id === chapterId);
  const paragraphs = textbookParagraphs.filter((p) => p.chapterId === chapterId);

  useEffect(() => {
    progress.markChapterRead(chapterId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId]);

  if (!chapter) return null;

  return (
    <div>
      <TopBar title={`§${chapter.number} ${chapter.title}`} onBack={() => nav({ name: "textbook" })} />
      <div className="space-y-5 px-4 py-4">
        {paragraphs.map((p) => (
          <div key={p.id} className="rounded-2xl bg-slate-900 p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-emerald-400">
                § {p.number}
              </span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
                {p.level}
              </span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-slate-100">{p.title}</h3>

            <ul className="mt-3 space-y-2">
              {p.body.map((line, i) => (
                <li key={i} className="text-sm leading-relaxed text-slate-300">
                  {line}
                </li>
              ))}
            </ul>

            {p.table && (
              <div className="mt-3 overflow-x-auto rounded-lg border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-800/60 text-slate-400">
                      {p.table.headers.map((h, i) => (
                        <th key={i} className="whitespace-nowrap px-2.5 py-2 font-medium">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {p.table.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-slate-800">
                        {row.map((cell, ci) => (
                          <td key={ci} className="whitespace-nowrap px-2.5 py-2 text-slate-200">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {p.examples && p.examples.length > 0 && (
              <div className="mt-3 space-y-1.5">
                {p.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2.5">
                    <div className="flex-1">
                      <p className="text-sm text-slate-100">{ex.de}</p>
                      <p className="text-xs text-slate-500">{ex.ru}</p>
                    </div>
                    <SpeakButton text={ex.de} size="sm" />
                  </div>
                ))}
              </div>
            )}

            {p.exceptions && p.exceptions.length > 0 && (
              <div className="mt-3 rounded-lg bg-amber-500/10 p-2.5">
                <p className="text-[11px] font-semibold text-amber-400">Исключения</p>
                <ul className="mt-1 space-y-1">
                  {p.exceptions.map((exc, i) => (
                    <li key={i} className="text-xs leading-relaxed text-amber-200/80">
                      • {exc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
