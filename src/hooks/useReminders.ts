import { useCallback, useEffect } from "react";

const LAST_REMINDER_KEY = "deutsch-b2c1-last-reminder";

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export function useReminderPermission() {
  const supported = typeof window !== "undefined" && "Notification" in window;

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!supported) return false;
    if (Notification.permission === "granted") return true;
    if (Notification.permission === "denied") return false;
    const result = await Notification.requestPermission();
    return result === "granted";
  }, [supported]);

  const notifyNow = useCallback(
    (title: string, body: string) => {
      if (!supported || Notification.permission !== "granted") return;
      new Notification(title, { body, icon: "icon-192.png" });
    },
    [supported],
  );

  return { supported, permission: supported ? Notification.permission : "default", requestPermission, notifyNow };
}

// Fires at most one gentle "don't break your streak" nudge per day, only while the
// app/tab is open — there is no backend/push server, so true background push when
// the app is fully closed isn't possible here.
export function useStreakReminder(
  enabled: boolean,
  lastActiveDate: string | null,
  streakCount: number,
) {
  const { supported, notifyNow } = useReminderPermission();

  useEffect(() => {
    if (!enabled || !supported) return;
    const check = () => {
      const today = todayStr();
      if (lastActiveDate === today) return;
      const hour = new Date().getHours();
      if (hour < 18) return;
      const lastReminder = localStorage.getItem(LAST_REMINDER_KEY);
      if (lastReminder === today) return;
      localStorage.setItem(LAST_REMINDER_KEY, today);
      notifyNow(
        "Не бросай немецкий! 🇩🇪",
        streakCount > 0
          ? `Серия ${streakCount} дней подряд под угрозой — загляни хотя бы на 5 минут.`
          : "Сегодня ты ещё не занимался — пять минут экспресс-тренировки лучше, чем ничего.",
      );
    };
    check();
    const interval = setInterval(check, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [enabled, supported, lastActiveDate, streakCount, notifyNow]);
}
