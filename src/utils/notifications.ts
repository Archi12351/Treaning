import { Capacitor } from "@capacitor/core";

// Reminders are strictly opt-in: nothing is scheduled and no OS permission
// dialog is shown until the user has explicitly agreed in our own consent
// screen (components/ReminderConsent.tsx). The decision, its time and the
// chosen reminder time are stored so the user can review/withdraw it in
// Settings at any moment.

const CONSENT_KEY = "movingua-reminder-consent-v1";
const DAILY_BASE_ID = 1000;
const TRIAL_ID = 2001;

export interface ReminderConsent {
  status: "granted" | "declined";
  decidedAt: string;
  hour: number;
  minute: number;
  // Separate opt-in: a heads-up before a free trial turns into a paid plan.
  trialReminder: boolean;
}

const isNative = Capacitor.isNativePlatform();

export function getReminderConsent(): ReminderConsent | null {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
  } catch {
    return null;
  }
}

function saveConsent(c: ReminderConsent) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  } catch {
    // ignore
  }
}

async function requestOsPermission(): Promise<boolean> {
  if (isNative) {
    const { LocalNotifications } = await import("@capacitor/local-notifications");
    const current = await LocalNotifications.checkPermissions();
    if (current.display === "granted") return true;
    const res = await LocalNotifications.requestPermissions();
    return res.display === "granted";
  }
  if (typeof window === "undefined" || !("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  return (await Notification.requestPermission()) === "granted";
}

const DAILY_MESSAGES: { title: string; body: string }[] = [
  { title: "5 минут — и день засчитан 🔥", body: "Экспресс-тренировка ждёт: карточки, грамматика и разговор." },
  { title: "Новые слова не выучатся сами 📚", body: "Повтори карточки, пока они свежи в памяти — так работает интервальное повторение." },
  { title: "Поговорим? 🗣️", body: "Пройди один диалог — например, в госучреждении или в кафе." },
  { title: "Твоя серия под защитой? 🛡️", body: "Загляни на пару минут, чтобы не потерять серию дней подряд." },
  { title: "Факт дня уже готов 🌍", body: "Узнай что-то новое о стране, язык которой учишь." },
  { title: "Маленький шаг к свободному языку ✨", body: "Даже 5 минут в день дают заметный результат через месяц." },
  { title: "Время практики ⏰", body: "Пара упражнений по грамматике — и можно отдыхать." },
];

export async function scheduleDailyReminders(hour: number, minute: number): Promise<void> {
  if (!isNative) return; // the web build reminds while the app is open (useStreakReminder)
  const { LocalNotifications } = await import("@capacitor/local-notifications");
  await cancelDailyReminders();
  await LocalNotifications.schedule({
    notifications: DAILY_MESSAGES.map((m, i) => ({
      id: DAILY_BASE_ID + i,
      title: m.title,
      body: m.body,
      // Capacitor weekdays: 1 = Sunday … 7 = Saturday — one message per day.
      schedule: { on: { weekday: i + 1, hour, minute }, allowWhileIdle: true },
    })),
  });
}

export async function cancelDailyReminders(): Promise<void> {
  if (!isNative) return;
  const { LocalNotifications } = await import("@capacitor/local-notifications");
  await LocalNotifications.cancel({
    notifications: DAILY_MESSAGES.map((_, i) => ({ id: DAILY_BASE_ID + i })),
  });
}

// Called after the user taps "Да, напоминать" in our own consent dialog.
export async function grantReminderConsent(
  hour: number,
  minute: number,
  trialReminder: boolean,
): Promise<boolean> {
  const osGranted = await requestOsPermission();
  saveConsent({
    status: osGranted ? "granted" : "declined",
    decidedAt: new Date().toISOString(),
    hour,
    minute,
    trialReminder,
  });
  if (osGranted) await scheduleDailyReminders(hour, minute);
  return osGranted;
}

export function declineReminderConsent(): void {
  saveConsent({
    status: "declined",
    decidedAt: new Date().toISOString(),
    hour: 19,
    minute: 0,
    trialReminder: false,
  });
}

export async function withdrawReminderConsent(): Promise<void> {
  declineReminderConsent();
  await cancelDailyReminders();
  if (isNative) {
    const { LocalNotifications } = await import("@capacitor/local-notifications");
    await LocalNotifications.cancel({ notifications: [{ id: TRIAL_ID }] });
  }
}

export async function updateReminderTime(hour: number, minute: number): Promise<void> {
  const c = getReminderConsent();
  if (!c || c.status !== "granted") return;
  saveConsent({ ...c, hour, minute });
  await scheduleDailyReminders(hour, minute);
}

export async function setTrialReminder(enabled: boolean): Promise<void> {
  const c = getReminderConsent();
  if (!c) return;
  saveConsent({ ...c, trialReminder: enabled });
  if (!enabled && isNative) {
    const { LocalNotifications } = await import("@capacitor/local-notifications");
    await LocalNotifications.cancel({ notifications: [{ id: TRIAL_ID }] });
  }
}

export async function scheduleTrialEndingReminder(
  expirationIso: string,
  daysBefore = 2,
): Promise<void> {
  const c = getReminderConsent();
  if (!isNative || !c || c.status !== "granted" || !c.trialReminder) return;
  const at = new Date(new Date(expirationIso).getTime() - daysBefore * 86_400_000);
  if (at.getTime() <= Date.now()) return;
  const { LocalNotifications } = await import("@capacitor/local-notifications");
  await LocalNotifications.schedule({
    notifications: [
      {
        id: TRIAL_ID,
        title: "Пробный период скоро закончится",
        body: `Через ${daysBefore} дн. начнётся платная подписка. Если не хотите продолжать — отмените её в настройках магазина приложений, деньги не спишутся.`,
        schedule: { at, allowWhileIdle: true },
      },
    ],
  });
}
