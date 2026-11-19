import { useState } from "react";
import { SUBSCRIPTION } from "../config/brand";
import { declineReminderConsent, grantReminderConsent } from "../utils/notifications";

// Our own consent dialog, shown BEFORE the operating system's permission
// prompt. It says exactly what we'll send and how often, lets the user pick
// the time, and makes "no" a first-class answer. Only after an explicit "yes"
// do we ask the OS for permission — so nobody gets notifications they didn't
// agree to, and the OS prompt (which can only be shown once on iOS) isn't
// wasted on someone who isn't interested.
export function ReminderConsent({ onDone }: { onDone: (granted: boolean) => void }) {
  const [time, setTime] = useState("19:00");
  const [trialReminder, setTrialReminder] = useState(true);
  const [busy, setBusy] = useState(false);

  const accept = async () => {
    setBusy(true);
    const [h, m] = time.split(":").map(Number);
    const granted = await grantReminderConsent(h || 19, m || 0, trialReminder);
    setBusy(false);
    onDone(granted);
  };

  const decline = () => {
    declineReminderConsent();
    onDone(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 sm:items-center">
      <div className="w-full max-w-md rounded-3xl bg-slate-900 p-5 shadow-2xl">
        <p className="text-3xl">🔔</p>
        <p className="mt-2 text-lg font-bold text-slate-50">Напоминать о занятиях?</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">
          Тем, кто занимается каждый день хотя бы 5 минут, язык даётся
          заметно быстрее. Мы можем присылать одно короткое напоминание в день.
        </p>
        <ul className="mt-3 space-y-1 text-xs text-slate-400">
          <li>• Не чаще одного раза в день, без рекламы.</li>
          <li>• Отключить можно в любой момент в Настройках.</li>
        </ul>
        <label className="mt-4 flex items-center justify-between rounded-xl bg-slate-800/60 px-3 py-2 text-sm text-slate-200">
          Время напоминания
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded-md bg-slate-900 px-2 py-1 text-slate-100"
          />
        </label>
        <label className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
          <input
            type="checkbox"
            checked={trialReminder}
            onChange={(e) => setTrialReminder(e.target.checked)}
            className="mt-0.5"
          />
          Если я оформлю пробный период — предупредить за{" "}
          {SUBSCRIPTION.trialReminderDaysBefore} дня до первого списания.
        </label>
        <div className="mt-5 flex gap-2">
          <button
            onClick={decline}
            className="flex-1 rounded-xl bg-slate-800 py-3 text-sm font-medium text-slate-300"
          >
            Не сейчас
          </button>
          <button
            onClick={() => void accept()}
            disabled={busy}
            className="accent-bg flex-1 rounded-xl py-3 text-sm font-semibold disabled:opacity-60"
          >
            {busy ? "…" : "Да, напоминать"}
          </button>
        </div>
      </div>
    </div>
  );
}
