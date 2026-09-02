import { useMemo } from "react";
import type { Route } from "../App";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { LANGUAGE_LIST } from "../data/languages";
import { LEVEL_ORDER, levelIndex } from "../utils/studyPlan";
import { masteryPercent, MASTERY_THRESHOLD } from "../utils/srs";
import { buildStudyPlan, type PlanStep } from "../utils/studyPlan";

export function HomeScreen({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { grammarTopics, vocabTopics, vocabulary, conversations } = useLanguageData();

  const vocabMastered = vocabulary.filter(
    (v) => masteryPercent(progress.vocabCards[v.id]) >= MASTERY_THRESHOLD,
  ).length;
  const grammarDone = Object.values(progress.grammarProgress).reduce(
    (sum, g) => sum + g.completed.length,
    0,
  );
  const totalGrammarExercises = grammarTopics.reduce(
    (sum, t) => sum + t.exercises.length,
    0,
  );

  const plan = useMemo(
    () =>
      buildStudyPlan({
        level: progress.level,
        grammarProgress: progress.grammarProgress,
        vocabCards: progress.vocabCards,
        conversationsDone: progress.conversationsDone,
        grammarTopics,
        vocabTopics,
        vocabulary,
        conversations,
        limit: 4,
      }),
    [
      progress.level,
      progress.grammarProgress,
      progress.vocabCards,
      progress.conversationsDone,
      grammarTopics,
      vocabTopics,
      vocabulary,
      conversations,
    ],
  );

  const openStep = (step: PlanStep) => {
    if (step.kind === "grammar") nav({ name: "grammar-detail", topicId: step.id });
    else if (step.kind === "vocab") nav({ name: "vocab-trainer", topic: step.id });
    else nav({ name: "conversation-player", id: step.id });
  };

  return (
    <div className="px-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">С возвращением 👋</p>
          <h1 className="text-2xl font-bold text-slate-50">Tutorem</h1>
        </div>
        <div className="flex flex-col items-end">
          <span className="accent-soft-bg rounded-full px-3 py-1 text-sm font-semibold">
            {progress.level}
          </span>
          <span className="mt-1 text-xs text-slate-500">🔥 {progress.streakCount} дней</span>
        </div>
      </div>

      <div className="mt-3 flex gap-1.5">
        {LANGUAGE_LIST.map((l) => (
          <button
            key={l.code}
            onClick={() => progress.setLanguage(l.code)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              progress.language === l.code
                ? "accent-bg"
                : "bg-slate-900 text-slate-400"
            }`}
          >
            {l.flag} {l.label}
          </button>
        ))}
      </div>

      {!progress.placementDone && (
        <button
          onClick={() => nav({ name: "placement" })}
          className="accent-gradient mt-5 w-full rounded-2xl p-4 text-left shadow-lg active:scale-[0.99]"
        >
          <p className="text-sm font-semibold">
            Определите свой уровень
          </p>
          <p className="mt-0.5 text-xs opacity-80">
            Короткий тест (5 минут) — от A1 до C2, чтобы начать с нужного уровня
          </p>
        </button>
      )}

      <button
        onClick={() => nav({ name: "express" })}
        className="mt-4 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 p-4 text-left shadow-lg shadow-indigo-500/20 active:scale-[0.99]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">⚡ Экспресс-тренировка</p>
            <p className="mt-0.5 text-xs text-white/80">
              5 минут: лексика + грамматика + разговор
            </p>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </button>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <StatCard label="XP" value={String(progress.xp)} />
        <StatCard label="Слов усвоено" value={`${vocabMastered}/${vocabulary.length}`} />
        <StatCard
          label="Грамматика"
          value={`${grammarDone}/${totalGrammarExercises}`}
        />
      </div>

      {plan.length > 0 && (
        <>
          <div className="flex items-center justify-between">
            <SectionTitle>Моя программа</SectionTitle>
            <button
              onClick={() => nav({ name: "study-path" })}
              className="accent-text pb-2 text-xs font-medium"
            >
              Весь план →
            </button>
          </div>
          <div className="space-y-2">
            {plan.map((step) => (
              <button
                key={`${step.kind}-${step.id}`}
                onClick={() => openStep(step)}
                className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-3.5 text-left active:bg-slate-800"
              >
                <span className="text-xl">
                  {step.kind === "grammar" ? "🧩" : step.kind === "vocab" ? "📚" : "🗣️"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-100">{step.title}</p>
                  <p className="truncate text-[11px] text-slate-500">{step.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">
                  {step.level}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      <SectionTitle>Быстрый доступ</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <QuickCard
          icon="📚"
          title="Лексика"
          subtitle="Карточки + произношение"
          onClick={() => nav({ name: "vocab-topics" })}
        />
        <QuickCard
          icon="🧩"
          title="Грамматика"
          subtitle={`${grammarTopics.length} тем, A1–C1`}
          onClick={() => nav({ name: "grammar-topics" })}
        />
        <QuickCard
          icon="📖"
          title="Учебник"
          subtitle="Все правила A1–C2"
          onClick={() => nav({ name: "textbook" })}
        />
        <QuickCard
          icon="🗣️"
          title="Диалоги"
          subtitle="Сценарии + AI-собеседник"
          onClick={() => nav({ name: "conversations" })}
        />
        <QuickCard
          icon="📝"
          title="Тест"
          subtitle="Проверь себя"
          onClick={() => nav({ name: "quiz" })}
        />
        <QuickCard
          icon="📊"
          title="Профиль"
          subtitle="Прогресс и настройки"
          onClick={() => nav({ name: "progress" })}
        />
        {progress.language === "de" && (
          <QuickCard
            icon="🌍"
            title="Культура и факты"
            subtitle="Зарплаты, страны DACH"
            onClick={() => nav({ name: "culture" })}
          />
        )}
      </div>

      <SectionTitle>Разговорные темы</SectionTitle>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {conversations
          .filter(
            (c) => levelIndex(c.level) <= Math.min(levelIndex(progress.level) + 1, LEVEL_ORDER.length - 1),
          )
          .sort((a, b) => levelIndex(b.level) - levelIndex(a.level))
          .slice(0, 5)
          .map((c) => (
            <button
              key={c.id}
              onClick={() => nav({ name: "conversation-player", id: c.id })}
              className="flex w-32 shrink-0 flex-col gap-1 rounded-xl bg-slate-900 p-3 text-left active:bg-slate-800"
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-xs font-medium text-slate-200">{c.ru}</span>
            </button>
          ))}
      </div>
      <div className="h-4" />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900 p-3 text-center">
      <p className="text-lg font-bold text-slate-50">{value}</p>
      <p className="mt-0.5 text-[11px] leading-tight text-slate-500">{label}</p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
      {children}
    </h2>
  );
}

function QuickCard({
  icon,
  title,
  subtitle,
  onClick,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-1 rounded-xl bg-slate-900 p-3.5 text-left active:bg-slate-800"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-semibold text-slate-100">{title}</span>
      <span className="text-[11px] text-slate-500">{subtitle}</span>
    </button>
  );
}
