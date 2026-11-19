import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { masteryPercent, MASTERY_THRESHOLD } from "../utils/srs";
import { isRunningAsInstalledApp } from "../hooks/useIsInstalled";
import { canUseAI } from "../utils/aiBackend";
import { ACHIEVEMENTS } from "../utils/engagement";

const GOALS = [
  { xp: 15, label: "Лёгкий", note: "~5 мин" },
  { xp: 30, label: "Обычный", note: "~10 мин" },
  { xp: 60, label: "Серьёзный", note: "~20 мин" },
  { xp: 100, label: "Интенсив", note: "~30 мин" },
];

export function ProgressScreen({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const { vocabulary, grammarTopics, conversations } = useLanguageData();

  const vocabMastered = vocabulary.filter(
    (v) => masteryPercent(progress.vocabCards[v.id]) >= MASTERY_THRESHOLD,
  ).length;
  const vocabStarted = Object.keys(progress.vocabCards).length;
  const grammarDone = Object.values(progress.grammarProgress).reduce(
    (sum, g) => sum + g.completed.length,
    0,
  );
  const grammarTotal = grammarTopics.reduce((s, t) => s + t.exercises.length, 0);
  const last14 = lastDays(14);
  const lastTest = progress.placementHistory[progress.placementHistory.length - 1];
  const daysSinceTest = lastTest ? Math.floor((Date.now() - new Date(lastTest.date).getTime()) / 86_400_000) : null;
  const alreadyInstalled = isRunningAsInstalledApp();

  return (
    <div>
      <TopBar title="Профиль" />
      <div className="space-y-5 px-4 py-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-center">
          <p className="text-xs text-slate-400">Текущий уровень</p>
          <p className="accent-text mt-1 text-4xl font-black">{progress.level}</p>
          {progress.placementDone && (
            <p className="mt-1 text-xs text-slate-500">
              по результатам теста ({progress.levelConfidence}% точности)
            </p>
          )}
          {daysSinceTest !== null && daysSinceTest >= 30 && (
            <p className="mt-3 text-xs text-amber-300">
              С последнего теста прошло {daysSinceTest} дн. — проверьте, насколько вы выросли!
            </p>
          )}
          <button
            onClick={() => nav({ name: "placement" })}
            className="mt-4 rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200"
          >
            {progress.placementDone ? "Пройти тест заново" : "Пройти тест на уровень"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Stat label="🔥 Дней подряд" value={String(progress.streakCount)} />
          <Stat label="⭐ Опыт (XP)" value={String(progress.xp)} />
          <Stat label="📚 Слов усвоено" value={`${vocabMastered}/${vocabulary.length}`} />
          <Stat label="🗣️ Диалогов" value={`${progress.conversationsDone.length}/${conversations.length}`} />
        </div>

        {!alreadyInstalled && (
          <div className="rounded-2xl bg-slate-900 p-4">
            <p className="text-sm font-semibold text-slate-200">📲 Установить на телефон</p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-400">Android (Chrome):</span> меню ⋮ → «Добавить на главный экран».{" "}
              <span className="font-semibold text-slate-400">iPhone (Safari):</span> «Поделиться» → «На экран «Домой»».
            </p>
          </div>
        )}

        <button
          onClick={() => nav({ name: "settings" })}
          className="flex w-full items-center justify-between rounded-2xl bg-slate-900 p-4 text-left"
        >
          <div>
            <p className="text-sm font-semibold text-slate-200">⚙️ AI-собеседник: API-ключ и модель</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {canUseAI(progress.aiProvider, progress.apiKey, progress.geminiApiKey)
                ? `Подключено: ${progress.aiProvider === "gemini" ? "Gemini" : "Claude"}`
                : "Ключ не задан — AI-диалоги недоступны"}
            </p>
          </div>
          <span className="text-slate-500">→</span>
        </button>

        <div className="rounded-2xl bg-slate-900 p-4">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold text-slate-300">Опыт за 2 недели</p>
            <p className="text-xs text-slate-500">
              {last14.reduce((sum, d) => sum + (progress.xpByDay[d.date] ?? 0), 0)} XP
            </p>
          </div>
          <div className="mt-3 flex h-24 items-end justify-between gap-1">
            {last14.map((day) => {
              const xp = progress.xpByDay[day.date] ?? 0;
              const max = Math.max(progress.dailyGoalXp, ...last14.map((d) => progress.xpByDay[d.date] ?? 0));
              const hitGoal = xp >= progress.dailyGoalXp;
              return (
                <div key={day.date} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t-md ${hitGoal ? "accent-bg" : xp > 0 ? "bg-slate-600" : "bg-slate-800"}`}
                    style={{ height: `${Math.max(4, (xp / max) * 80)}px` }}
                    title={`${xp} XP`}
                  />
                  <span className="text-[9px] text-slate-500">{day.label}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-[10px] text-slate-500">Цветные столбики — дни, когда выполнена цель дня.</p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-300">🎯 Цель дня</p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {GOALS.map((g) => (
              <button
                key={g.xp}
                onClick={() => progress.setDailyGoalXp(g.xp)}
                className={`rounded-xl px-1 py-2 text-center ${progress.dailyGoalXp === g.xp ? "accent-bg" : "bg-slate-800 text-slate-300"}`}
              >
                <p className="text-xs font-semibold">{g.label}</p>
                <p className="text-[10px] opacity-70">{g.xp} XP · {g.note}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold text-slate-300">🏅 Достижения</p>
            <p className="text-xs text-slate-500">
              {progress.achievements.length}/{ACHIEVEMENTS.length}
            </p>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {ACHIEVEMENTS.map((a) => {
              const got = progress.achievements.includes(a.id);
              return (
                <div key={a.id} className={`rounded-xl p-2 text-center ${got ? "bg-amber-500/15" : "bg-slate-800/50 opacity-40"}`} title={a.text}>
                  <p className="text-2xl">{got ? a.icon : "🔒"}</p>
                  <p className="mt-1 text-[9px] leading-tight text-slate-300">{a.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-300">Лексика</p>
          <ProgressBar value={vocabMastered} total={vocabulary.length} color="accent-bg" />
          <p className="mt-1 text-xs text-slate-500">
            Изучается: {vocabStarted}, усвоено прочно: {vocabMastered}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-300">Грамматика</p>
          <ProgressBar value={grammarDone} total={grammarTotal} color="bg-sky-500" />
          <p className="mt-1 text-xs text-slate-500">
            Решено упражнений: {grammarDone} из {grammarTotal}
          </p>
        </div>

        {progress.placementHistory.length > 0 && (
          <div className="rounded-2xl bg-slate-900 p-4">
            <p className="text-sm font-semibold text-slate-300">История тестов</p>
            <div className="mt-2 space-y-1.5">
              {progress.placementHistory
                .slice()
                .reverse()
                .map((h, i) => (
                  <div key={i} className="flex justify-between text-xs text-slate-400">
                    <span>{h.date}</span>
                    <span className="font-semibold text-slate-200">{h.level}</span>
                    <span>{h.score}%</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (confirm("Сбросить весь прогресс? Это действие необратимо.")) {
              progress.resetProgress();
            }
          }}
          className="w-full rounded-xl bg-red-950/40 py-3 text-sm font-medium text-red-400"
        >
          Сбросить прогресс
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900 p-3.5">
      <p className="text-xl font-bold text-slate-50">{value}</p>
      <p className="mt-0.5 text-[11px] text-slate-500">{label}</p>
    </div>
  );
}

function ProgressBar({
  value,
  total,
  color,
}: {
  value: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function lastDays(n: number) {
  const days = [];
  const labels = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({ date: d.toISOString().slice(0, 10), label: labels[d.getDay()] });
  }
  return days;
}
