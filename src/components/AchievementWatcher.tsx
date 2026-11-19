import { useEffect, useMemo, useRef, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { ACHIEVEMENTS, type Achievement, type AchievementStats } from "../utils/engagement";
import { masteryPercent, MASTERY_THRESHOLD } from "../utils/srs";

// Watches progress, unlocks achievements and celebrates them with a toast.
// Also celebrates hitting the daily XP goal once per day.
export function useAchievementStats(): AchievementStats {
  const progress = useProgress();
  const { conversations } = useLanguageData();
  return useMemo(() => {
    const officialIds = new Set(conversations.filter((c) => c.category === "official").map((c) => c.id));
    const langs = Object.values(progress.byLanguage);
    return {
      xp: progress.xp,
      streak: progress.streakCount,
      bestStreak: Math.max(progress.bestStreak ?? 0, progress.streakCount),
      wordsStarted: Object.keys(progress.vocabCards).length,
      wordsMastered: Object.values(progress.vocabCards).filter((c) => masteryPercent(c) >= MASTERY_THRESHOLD).length,
      grammarDone: Object.values(progress.grammarProgress).reduce((s, g) => s + g.completed.length, 0),
      dialogsDone: progress.conversationsDone.length,
      officialDialogsDone: progress.conversationsDone.filter((id) => officialIds.has(id)).length,
      textsRead: progress.textsRead.length,
      writingsDone: progress.writingsDone,
      languagesStarted: langs.filter((l) => Object.keys(l.vocabCards ?? {}).length > 0 || l.placementDone).length,
      placementDone: progress.placementDone,
      level: progress.level,
    };
  }, [progress, conversations]);
}

export function AchievementWatcher() {
  const progress = useProgress();
  const stats = useAchievementStats();
  const [queue, setQueue] = useState<{ icon: string; title: string; text: string }[]>([]);
  const goalCelebrated = useRef<string | null>(null);

  useEffect(() => {
    const fresh: Achievement[] = ACHIEVEMENTS.filter((a) => a.check(stats) && !progress.achievements.includes(a.id));
    if (fresh.length) {
      progress.unlockAchievements(fresh.map((a) => a.id));
      setQueue((q) => [...q, ...fresh.map((a) => ({ icon: a.icon, title: `Достижение: ${a.title}`, text: a.text }))]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const key = `movingua-goal-${today}`;
    if (progress.todayXp >= progress.dailyGoalXp && goalCelebrated.current !== today) {
      goalCelebrated.current = today;
      let seen = false;
      try {
        seen = localStorage.getItem(key) === "1";
        localStorage.setItem(key, "1");
      } catch {
        // ignore
      }
      if (!seen) setQueue((q) => [...q, { icon: "🎯", title: "Цель дня выполнена!", text: `${progress.todayXp} XP сегодня. Серия: ${progress.streakCount} дн. 🔥` }]);
    }
  }, [progress.todayXp, progress.dailyGoalXp, progress.streakCount]);

  useEffect(() => {
    if (!queue.length) return;
    const t = setTimeout(() => setQueue((q) => q.slice(1)), 3500);
    return () => clearTimeout(t);
  }, [queue]);

  const item = queue[0];
  if (!item) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[calc(env(safe-area-inset-top)+0.75rem)]">
      <div className="toast-in pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-fuchsia-600 p-4 shadow-2xl">
        <span className="text-3xl">{item.icon}</span>
        <div>
          <p className="text-sm font-bold text-white">{item.title}</p>
          <p className="text-xs text-white/90">{item.text}</p>
        </div>
      </div>
    </div>
  );
}
