import { useEffect, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { usePremium, type PlanOption } from "../hooks/usePremium";
import { BRAND, SUBSCRIPTION } from "../config/brand";
import { LANGUAGE_LIST } from "../data/languages";

const BENEFITS: { icon: string; title: string; text: string }[] = [
  { icon: "🚀", title: "Все уровни до C2", text: "Грамматика, словарь, учебник и диалоги B1–C2 — во всех языках сразу." },
  { icon: "🏛️", title: "Госуслуги без стресса", text: "Сценарии в ведомствах: регистрация, ВНЖ, налоговая, страховка, банк, полиция." },
  { icon: "🤖", title: "AI-собеседник голосом", text: "Живой разговор на любую тему с исправлением ошибок — без своих API-ключей." },
  { icon: "🌍", title: "Новые факты каждый день", text: "ИИ сам пополняет раздел о жизни, работе и бюрократии в стране." },
  { icon: "🧠", title: "Персональная программа", text: "План до C2 подстраивается под ваш уровень и прогресс." },
];

const COMPARISON: { feature: string; free: string; premium: string }[] = [
  { feature: "Уровни A1–A2", free: "✓", premium: "✓" },
  { feature: "Уровни B1–C2", free: "—", premium: "✓" },
  { feature: "Диалоги в госучреждениях", free: "2", premium: "все" },
  { feature: "AI-собеседник", free: "свой ключ", premium: "✓ включён" },
  { feature: "Факты от ИИ", free: "свой ключ", premium: "✓ каждый день" },
  { feature: "Тест на уровень, экспресс-режим", free: "✓", premium: "✓" },
];

export function Paywall({ nav, back }: { nav: (r: Route) => void; back: Route }) {
  const premium = usePremium();
  const [selected, setSelected] = useState<PlanOption | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!selected && premium.plans.length > 0) {
      setSelected(premium.plans.find((p) => p.kind === "annual") ?? premium.plans[0]);
    }
  }, [premium.plans, selected]);

  const buy = async () => {
    if (!selected) return;
    setBusy(true);
    setMessage(null);
    const res = await premium.purchase(selected);
    setBusy(false);
    if (res.ok) {
      setMessage("🎉 Premium активирован! Спасибо за поддержку.");
      setTimeout(() => nav(back), 1200);
    } else if (!res.cancelled && res.error) {
      setMessage(res.error);
    }
  };

  const restore = async () => {
    setBusy(true);
    setMessage(null);
    const res = await premium.restore();
    setBusy(false);
    setMessage(
      res.restored
        ? "Покупка восстановлена — Premium снова активен."
        : res.error || "Активных покупок на этом аккаунте магазина не найдено.",
    );
  };

  if (premium.isPremium && premium.paywallEnabled) {
    return (
      <div>
        <TopBar title="Premium" onBack={() => nav(back)} />
        <div className="space-y-4 px-4 py-6 text-center">
          <p className="text-5xl">💎</p>
          <p className="text-lg font-bold text-slate-50">Premium активен</p>
          {premium.expiresAt && (
            <p className="text-sm text-slate-400">
              {premium.inTrial ? "Пробный период до " : premium.willRenew ? "Продлится " : "Действует до "}
              {new Date(premium.expiresAt).toLocaleDateString("ru-RU")}
            </p>
          )}
          {premium.managementUrl && (
            <a
              href={premium.managementUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-100"
            >
              Управлять подпиской
            </a>
          )}
        </div>
      </div>
    );
  }

  const ctaText = !selected
    ? "Загрузка цен…"
    : selected.trial
      ? `Начать: ${selected.trial}`
      : `Оформить за ${selected.priceString}`;

  return (
    <div>
      <TopBar title={`${BRAND.name} Premium`} onBack={() => nav(back)} />
      <div className="space-y-5 px-4 pb-8 pt-2">
        <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-500 p-5 shadow-xl shadow-fuchsia-500/20">
          <p className="text-3xl">💎</p>
          <p className="mt-2 text-xl font-bold text-white">Говорите уверенно — где бы вы ни жили</p>
          <p className="mt-1 text-sm text-white/85">
            {LANGUAGE_LIST.map((l) => l.flag).join(" ")} Все языки, все уровни и личный AI-репетитор в одной подписке.
          </p>
        </div>

        <div className="space-y-2.5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex gap-3 rounded-xl bg-slate-900 p-3.5">
              <span className="text-2xl">{b.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-100">{b.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-slate-500">
                <th className="px-3 py-2 font-medium"></th>
                <th className="px-3 py-2 text-center font-medium">Бесплатно</th>
                <th className="px-3 py-2 text-center font-medium text-fuchsia-300">Premium</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((r) => (
                <tr key={r.feature} className="border-t border-slate-800">
                  <td className="px-3 py-2 text-slate-300">{r.feature}</td>
                  <td className="px-3 py-2 text-center text-slate-500">{r.free}</td>
                  <td className="px-3 py-2 text-center font-semibold text-slate-100">{r.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {premium.isNative ? (
          <>
            <div className="space-y-2.5">
              {premium.plans.length === 0 && !premium.loading && (
                <p className="rounded-xl bg-slate-900 p-3 text-xs text-slate-400">
                  Не удалось загрузить тарифы из магазина. Проверьте интернет и
                  попробуйте ещё раз.
                </p>
              )}
              {premium.plans.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`relative flex w-full items-center justify-between rounded-xl border-2 p-4 text-left ${
                    selected?.id === p.id ? "border-fuchsia-400 bg-fuchsia-500/10" : "border-slate-800 bg-slate-900"
                  }`}
                >
                  {p.kind === "annual" && (
                    <span className="absolute -top-2.5 right-3 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-slate-900">
                      ВЫГОДНЕЕ
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{p.title}</p>
                    {p.trial && <p className="text-[11px] text-emerald-300">{p.trial}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-50">{p.priceString}</p>
                    {p.perMonth && <p className="text-[11px] text-slate-400">{p.perMonth}</p>}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => void buy()}
              disabled={!selected || busy}
              className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 py-4 text-base font-bold text-white shadow-lg shadow-fuchsia-500/30 disabled:opacity-60"
            >
              {busy ? "Подождите…" : ctaText}
            </button>
            {message && <p className="text-center text-sm text-slate-200">{message}</p>}

            {/* Required disclosures — shown before purchase, in plain language. */}
            <div className="space-y-1.5 text-[11px] leading-relaxed text-slate-500">
              {selected?.trial ? (
                <p>
                  Первые дни бесплатно. По окончании пробного периода подписка
                  автоматически начнётся по цене {selected.priceString}, если не
                  отменить её минимум за 24 часа до конца пробного периода. Мы
                  напомним за {SUBSCRIPTION.trialReminderDaysBefore} дня до
                  списания, если вы разрешили уведомления.
                </p>
              ) : (
                <p>
                  Подписка продлевается автоматически по той же цене, если не
                  отменить её минимум за 24 часа до конца текущего периода.
                </p>
              )}
              <p>
                Оплата и отмена — через ваш аккаунт{" "}
                {premium.isNative ? "App Store / Google Play" : "магазина приложений"}: отменить
                можно в любой момент в настройках подписок, доступ сохранится до
                конца оплаченного периода.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs">
              <button onClick={() => void restore()} disabled={busy} className="text-slate-300 underline">
                Восстановить покупки
              </button>
              <a href={BRAND.termsUrl} target="_blank" rel="noreferrer" className="text-slate-500 underline">
                Условия
              </a>
              <a href={BRAND.privacyUrl} target="_blank" rel="noreferrer" className="text-slate-500 underline">
                Конфиденциальность
              </a>
            </div>
          </>
        ) : (
          <div className="space-y-3 rounded-xl bg-slate-900 p-4 text-sm text-slate-300">
            <p>
              Подписка оформляется в приложении {BRAND.name} для iPhone и Android —
              через App Store или Google Play, с бесплатным пробным периодом.
            </p>
            <div className="flex flex-wrap gap-2">
              {import.meta.env.VITE_APP_STORE_URL && (
                <a href={import.meta.env.VITE_APP_STORE_URL} className="rounded-lg bg-slate-800 px-3 py-2 text-xs">
                  App Store
                </a>
              )}
              {import.meta.env.VITE_PLAY_STORE_URL && (
                <a href={import.meta.env.VITE_PLAY_STORE_URL} className="rounded-lg bg-slate-800 px-3 py-2 text-xs">
                  ▶ Google Play
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Shown in place of content that needs Premium — explains what's locked and why.
export function LockedScreen({
  level,
  what,
  nav,
  back,
}: {
  level?: string;
  what: string;
  nav: (r: Route) => void;
  back: Route;
}) {
  return (
    <div>
      <TopBar title="Premium" onBack={() => nav(back)} />
      <div className="space-y-4 px-6 py-10 text-center">
        <p className="text-5xl">🔒</p>
        <p className="text-lg font-bold text-slate-50">{what}</p>
        <p className="text-sm leading-relaxed text-slate-400">
          {level
            ? `Материалы уровня ${level} входят в Premium. Уровни A1–A2 остаются бесплатными навсегда.`
            : "Эта функция входит в Premium."}
        </p>
        <button
          onClick={() => nav({ name: "paywall" })}
          className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 py-3.5 text-sm font-bold text-white"
        >
          Посмотреть Premium
        </button>
      </div>
    </div>
  );
}
