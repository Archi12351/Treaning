import type { Route } from "../App";
import { useProgress } from "../hooks/useProgress";
import { GRAMMAR_TOPICS } from "../data/grammar";
import { VOCABULARY } from "../data/vocabulary";
import { CONVERSATIONS } from "../data/conversations";
import { masteryPercent } from "../utils/srs";

export function HomeScreen({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();

  const vocabMastered = VOCABULARY.filter(
    (v) => masteryPercent(progress.vocabCards[v.id]) >= 80,
  ).length;
  const grammarDone = Object.values(progress.grammarProgress).reduce(
    (sum, g) => sum + g.completed.length,
    0,
  );
  const totalGrammarExercises = GRAMMAR_TOPICS.reduce(
    (sum, t) => sum + t.exercises.length,
    0,
  );

  return (
    <div className="px-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Willkommen zurück 👋</p>
          <h1 className="text-2xl font-bold text-slate-50">Deutsch B2–C1</h1>
        </div>
        <div className="flex flex-col items-end">
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400">
            {progress.level}
          </span>
          <span className="mt-1 text-xs text-slate-500">🔥 {progress.streakCount} дней</span>
        </div>
      </div>

      {!progress.placementDone && (
        <button
          onClick={() => nav({ name: "placement" })}
          className="mt-5 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-left shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
        >
          <p className="text-sm font-semibold text-emerald-950">
            Определите свой уровень
          </p>
          <p className="mt-0.5 text-xs text-emerald-950/80">
            Пройдите короткий тест (5 минут), чтобы начать с нужного уровня
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
        <StatCard label="Слов усвоено" value={`${vocabMastered}/${VOCABULARY.length}`} />
        <StatCard
          label="Грамматика"
          value={`${grammarDone}/${totalGrammarExercises}`}
        />
      </div>

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
          subtitle="8 тем B2–C1"
          onClick={() => nav({ name: "grammar-topics" })}
        />
        <QuickCard
          icon="🗣️"
          title="Диалоги"
          subtitle="Голос, реальные темы"
          onClick={() => nav({ name: "conversations" })}
        />
        <QuickCard
          icon="📝"
          title="Тест"
          subtitle="Проверь себя"
          onClick={() => nav({ name: "quiz" })}
        />
      </div>

      <SectionTitle>Разговорные темы</SectionTitle>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {CONVERSATIONS.slice(0, 5).map((c) => (
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
