import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { VOCABULARY } from "../data/vocabulary";
import { GRAMMAR_TOPICS } from "../data/grammar";
import { CONVERSATIONS } from "../data/conversations";
import { masteryPercent } from "../utils/srs";

export function ProgressScreen({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();

  const vocabMastered = VOCABULARY.filter(
    (v) => masteryPercent(progress.vocabCards[v.id]) >= 80,
  ).length;
  const vocabStarted = Object.keys(progress.vocabCards).length;
  const grammarDone = Object.values(progress.grammarProgress).reduce(
    (sum, g) => sum + g.completed.length,
    0,
  );
  const grammarTotal = GRAMMAR_TOPICS.reduce((s, t) => s + t.exercises.length, 0);
  const last7 = last7Days();

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
          <Stat label="📚 Слов усвоено" value={`${vocabMastered}/${VOCABULARY.length}`} />
          <Stat label="🗣️ Диалогов" value={`${progress.conversationsDone.length}/${CONVERSATIONS.length}`} />
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">📲 Установить приложение</p>
          <a
            href="deutsch-a1-c2.apk"
            download
            className="accent-bg mt-3 flex items-center justify-between rounded-xl px-3.5 py-2.5"
          >
            <span className="text-sm font-semibold">Скачать APK для Android</span>
            <span>⬇︎</span>
          </a>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
            После скачивания разрешите «Установку из неизвестных источников» —
            это не магазин приложений, поэтому Android спросит подтверждение.
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-400">На iPhone:</span> откройте
            эту страницу в Safari → кнопка «Поделиться» → «На экран «Домой»» —
            приложение появится как обычная иконка.
          </p>
        </div>

        <button
          onClick={() => nav({ name: "settings" })}
          className="flex w-full items-center justify-between rounded-2xl bg-slate-900 p-4 text-left"
        >
          <div>
            <p className="text-sm font-semibold text-slate-200">⚙️ AI-собеседник: API-ключ и модель</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {progress.apiKey ? "Ключ добавлен" : "Ключ не задан — AI-диалоги недоступны"}
            </p>
          </div>
          <span className="text-slate-500">→</span>
        </button>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-300">Активность за 7 дней</p>
          <div className="mt-3 flex justify-between">
            {last7.map((day) => (
              <div key={day.date} className="flex flex-col items-center gap-1.5">
                <div
                  className={`h-8 w-8 rounded-lg ${
                    progress.activeDates.includes(day.date)
                      ? "accent-bg"
                      : "bg-slate-800"
                  }`}
                />
                <span className="text-[10px] text-slate-500">{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-300">Лексика</p>
          <ProgressBar value={vocabMastered} total={VOCABULARY.length} color="accent-bg" />
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

function last7Days() {
  const days = [];
  const labels = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({ date: d.toISOString().slice(0, 10), label: labels[d.getDay()] });
  }
  return days;
}
