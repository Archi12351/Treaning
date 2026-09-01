import { useState } from "react";
import type { Route } from "../App";
import type { CEFRLevel } from "../types";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { GRAMMAR_TOPICS } from "../data/grammar";
import { TOPICS as VOCAB_TOPICS, VOCABULARY } from "../data/vocabulary";
import { CONVERSATIONS } from "../data/conversations";
import { TEXTBOOK_CHAPTERS } from "../data/textbook";
import { LEVEL_ORDER, levelIndex } from "../utils/studyPlan";
import { masteryPercent, MASTERY_THRESHOLD } from "../utils/srs";

const LEVEL_TITLES: Record<CEFRLevel, string> = {
  A1: "Начальный старт",
  A2: "Базовый",
  B1: "Пороговый",
  B2: "Продвинутый",
  C1: "Профессиональный",
  C2: "Свободное владение",
};

// A chapter's levelRange like "A1–B1" is read as "start reading it at A1".
function chapterStartLevel(range: string): CEFRLevel {
  const first = range.split(/[–-]/)[0].trim() as CEFRLevel;
  return LEVEL_ORDER.includes(first) ? first : "A1";
}

export function StudyPath({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [openLevel, setOpenLevel] = useState<CEFRLevel | null>(progress.level);
  const maxUnlockedIdx = Math.min(levelIndex(progress.level) + 1, LEVEL_ORDER.length - 1);

  return (
    <div>
      <TopBar title="Учебный план" onBack={() => nav({ name: "home" })} />
      <div className="px-4 py-4">
        <p className="text-xs leading-relaxed text-slate-500">
          Программа по шагам для каждого уровня: сначала прочитайте параграфы
          учебника, затем пройдите упражнения по тем же правилам, выучите
          слова темы и закрепите всё в диалоге.
        </p>
      </div>

      <div className="space-y-3 px-4 pb-6">
        {LEVEL_ORDER.map((level) => {
          const idx = levelIndex(level);
          const isOpen = openLevel === level;
          const isLocked = idx > maxUnlockedIdx;
          const isCurrent = level === progress.level;

          const chapters = TEXTBOOK_CHAPTERS.filter(
            (c) => chapterStartLevel(c.levelRange) === level,
          );
          const grammarTopics = GRAMMAR_TOPICS.filter((t) => t.level === level);
          const vocabTopics = VOCAB_TOPICS.filter((t) => t.level === level);
          const conversations = CONVERSATIONS.filter((c) => c.level === level);

          const grammarDone = grammarTopics.filter(
            (t) => (progress.grammarProgress[t.id]?.completed.length ?? 0) >= t.exercises.length,
          ).length;
          const vocabDone = vocabTopics.filter((t) => {
            const words = VOCABULARY.filter((w) => w.topic === t.id);
            return (
              words.length > 0 &&
              words.every((w) => masteryPercent(progress.vocabCards[w.id]) >= MASTERY_THRESHOLD)
            );
          }).length;
          const conversationsDone = conversations.filter((c) =>
            progress.conversationsDone.includes(c.id),
          ).length;
          const chaptersDone = chapters.filter((c) =>
            progress.chaptersRead.includes(c.id),
          ).length;

          return (
            <div
              key={level}
              className={`rounded-2xl bg-slate-900 ${isLocked ? "opacity-50" : ""}`}
            >
              <button
                onClick={() => !isLocked && setOpenLevel(isOpen ? null : level)}
                className="flex w-full items-center gap-3 p-4 text-left"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isCurrent ? "accent-bg" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {isLocked ? "🔒" : level}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-100">
                    {level} · {LEVEL_TITLES[level]}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {isLocked
                      ? "Откроется, когда вы дойдёте до этого уровня"
                      : `§${chaptersDone}/${chapters.length} · грамматика ${grammarDone}/${grammarTopics.length} · слова ${vocabDone}/${vocabTopics.length} · диалоги ${conversationsDone}/${conversations.length}`}
                  </p>
                </div>
                {!isLocked && <span className="text-slate-500">{isOpen ? "▲" : "▼"}</span>}
              </button>

              {isOpen && !isLocked && (
                <div className="space-y-4 px-4 pb-4">
                  {chapters.length > 0 && (
                    <StepGroup title="1. Прочитать параграфы">
                      {chapters.map((c) => (
                        <StepRow
                          key={c.id}
                          done={progress.chaptersRead.includes(c.id)}
                          title={`§${c.number} ${c.title}`}
                          onClick={() => nav({ name: "textbook-chapter", chapterId: c.id })}
                        />
                      ))}
                    </StepGroup>
                  )}

                  {grammarTopics.length > 0 && (
                    <StepGroup title="2. Пройти упражнения">
                      {grammarTopics.map((t) => {
                        const completed = progress.grammarProgress[t.id]?.completed.length ?? 0;
                        return (
                          <StepRow
                            key={t.id}
                            done={completed >= t.exercises.length}
                            title={t.title}
                            subtitle={`${completed}/${t.exercises.length}`}
                            onClick={() => nav({ name: "grammar-detail", topicId: t.id })}
                          />
                        );
                      })}
                    </StepGroup>
                  )}

                  {vocabTopics.length > 0 && (
                    <StepGroup title="3. Выучить слова">
                      {vocabTopics.map((t) => {
                        const words = VOCABULARY.filter((w) => w.topic === t.id);
                        const mastered = words.filter(
                          (w) => masteryPercent(progress.vocabCards[w.id]) >= MASTERY_THRESHOLD,
                        ).length;
                        return (
                          <StepRow
                            key={t.id}
                            done={words.length > 0 && mastered >= words.length}
                            title={t.ru}
                            subtitle={`${mastered}/${words.length}`}
                            onClick={() => nav({ name: "vocab-trainer", topic: t.id })}
                          />
                        );
                      })}
                    </StepGroup>
                  )}

                  {conversations.length > 0 && (
                    <StepGroup title="4. Закрепить в диалоге">
                      {conversations.map((c) => (
                        <StepRow
                          key={c.id}
                          done={progress.conversationsDone.includes(c.id)}
                          title={c.ru}
                          onClick={() => nav({ name: "conversation-player", id: c.id })}
                        />
                      ))}
                    </StepGroup>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StepGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function StepRow({
  title,
  subtitle,
  done,
  onClick,
}: {
  title: string;
  subtitle?: string;
  done: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2.5 rounded-lg bg-slate-800/50 px-3 py-2.5 text-left active:bg-slate-800"
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
          done ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-700 text-slate-500"
        }`}
      >
        {done ? "✓" : ""}
      </span>
      <span className="min-w-0 flex-1 truncate text-sm text-slate-200">{title}</span>
      {subtitle && <span className="shrink-0 text-[11px] text-slate-500">{subtitle}</span>}
    </button>
  );
}
