import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Capacitor } from "@capacitor/core";
import type { PurchasesPackage, CustomerInfo } from "@revenuecat/purchases-capacitor";
import type { CEFRLevel } from "../types";
import { FREE_MAX_LEVEL, REVENUECAT_KEYS, SUBSCRIPTION } from "../config/brand";
import { LEVEL_ORDER } from "../utils/studyPlan";
import { scheduleTrialEndingReminder } from "../utils/notifications";

// Premium state for the whole app.
//
// - Native (iOS/Android via Capacitor): purchases go through the App Store /
//   Google Play billing via RevenueCat — required by both stores for digital
//   subscriptions.
// - Web: by default everything stays free (the web build is the demo/funnel).
//   Set VITE_PAYWALL=1 to preview the paywall in a browser; buying is then
//   pointed to the store apps.

const CACHE_KEY = "movingua-premium-cache-v1";

export interface PlanOption {
  id: string;
  kind: "monthly" | "annual" | "lifetime" | "other";
  title: string;
  priceString: string;
  // e.g. "≈ 208 ₽ в месяц" for annual plans; computed from the store price.
  perMonth?: string;
  trial?: string;
  pkg?: PurchasesPackage;
}

interface PremiumState {
  paywallEnabled: boolean;
  isNative: boolean;
  isPremium: boolean;
  loading: boolean;
  inTrial: boolean;
  expiresAt: string | null;
  willRenew: boolean;
  managementUrl: string | null;
  plans: PlanOption[];
  storeReady: boolean;
  purchase: (plan: PlanOption) => Promise<{ ok: boolean; cancelled?: boolean; error?: string }>;
  restore: () => Promise<{ ok: boolean; restored: boolean; error?: string }>;
  isLevelLocked: (level: CEFRLevel) => boolean;
}

const PremiumContext = createContext<PremiumState | null>(null);

const isNative = Capacitor.isNativePlatform();
const paywallEnabled = isNative || import.meta.env.VITE_PAYWALL === "1";

function readCache(): { isPremium: boolean; expiresAt: string | null } {
  try {
    const raw = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (!raw) return { isPremium: false, expiresAt: null };
    // Never trust a cached entitlement past its own expiry date.
    if (raw.expiresAt && new Date(raw.expiresAt).getTime() < Date.now()) {
      return { isPremium: false, expiresAt: raw.expiresAt };
    }
    return raw;
  } catch {
    return { isPremium: false, expiresAt: null };
  }
}

function describePeriod(iso: string | null | undefined): string {
  switch (iso) {
    case "P1W":
      return "неделя";
    case "P1M":
      return "месяц";
    case "P3M":
      return "3 месяца";
    case "P6M":
      return "6 месяцев";
    case "P1Y":
      return "год";
    default:
      return "";
  }
}

function trialText(pkg: PurchasesPackage): string | undefined {
  const intro = pkg.product.introPrice;
  if (!intro || intro.price > 0) return undefined;
  const n = intro.periodNumberOfUnits;
  const unit = intro.periodUnit;
  if (unit === "DAY") return `${n} ${n === 1 ? "день" : n < 5 ? "дня" : "дней"} бесплатно`;
  if (unit === "WEEK") return `${n * 7} дней бесплатно`;
  if (unit === "MONTH") return `${n} мес. бесплатно`;
  return "Пробный период бесплатно";
}

function toPlan(pkg: PurchasesPackage): PlanOption {
  const p = pkg.product;
  const kind: PlanOption["kind"] =
    pkg.packageType === "MONTHLY"
      ? "monthly"
      : pkg.packageType === "ANNUAL"
        ? "annual"
        : pkg.packageType === "LIFETIME"
          ? "lifetime"
          : "other";
  let perMonth: string | undefined;
  if (kind === "annual" && p.price > 0) {
    try {
      perMonth = `≈ ${new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: p.currencyCode,
        maximumFractionDigits: 0,
      }).format(p.price / 12)} в месяц`;
    } catch {
      perMonth = undefined;
    }
  }
  const period = describePeriod(p.subscriptionPeriod);
  return {
    id: pkg.identifier,
    kind,
    title:
      kind === "monthly" ? "Месяц" : kind === "annual" ? "Год" : kind === "lifetime" ? "Навсегда" : p.title,
    priceString: period ? `${p.priceString} / ${period}` : p.priceString,
    perMonth,
    trial: trialText(pkg),
    pkg,
  };
}

export function PremiumProvider({ children }: { children: ReactNode }) {
  const cached = readCache();
  const [isPremium, setIsPremium] = useState(cached.isPremium);
  const [expiresAt, setExpiresAt] = useState<string | null>(cached.expiresAt);
  const [inTrial, setInTrial] = useState(false);
  const [willRenew, setWillRenew] = useState(false);
  const [managementUrl, setManagementUrl] = useState<string | null>(null);
  const [plans, setPlans] = useState<PlanOption[]>([]);
  const [storeReady, setStoreReady] = useState(false);
  const [loading, setLoading] = useState(isNative);

  const applyCustomerInfo = useCallback((info: CustomerInfo) => {
    const ent = info.entitlements.active[SUBSCRIPTION.entitlementId];
    const active = Boolean(ent);
    setIsPremium(active);
    setExpiresAt(ent?.expirationDate ?? null);
    setInTrial(ent?.periodType === "TRIAL");
    setWillRenew(Boolean(ent?.willRenew));
    setManagementUrl(info.managementURL ?? null);
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ isPremium: active, expiresAt: ent?.expirationDate ?? null }),
      );
    } catch {
      // ignore
    }
    // Honest trial: if the user agreed to reminders, warn them before the
    // trial turns into a paid subscription (fewer surprise charges/refunds).
    if (ent?.periodType === "TRIAL" && ent.willRenew && ent.expirationDate) {
      void scheduleTrialEndingReminder(ent.expirationDate);
    }
  }, []);

  useEffect(() => {
    if (!isNative) return;
    const apiKey = Capacitor.getPlatform() === "ios" ? REVENUECAT_KEYS.ios : REVENUECAT_KEYS.android;
    if (!apiKey) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const { Purchases } = await import("@revenuecat/purchases-capacitor");
        await Purchases.configure({ apiKey });
        await Purchases.addCustomerInfoUpdateListener((info) => {
          if (!cancelled) applyCustomerInfo(info);
        });
        const { customerInfo } = await Purchases.getCustomerInfo();
        if (!cancelled) applyCustomerInfo(customerInfo);
        const offerings = await Purchases.getOfferings();
        const pkgs = offerings.current?.availablePackages ?? [];
        if (!cancelled) {
          const order = { annual: 0, monthly: 1, lifetime: 2, other: 3 };
          setPlans(pkgs.map(toPlan).sort((a, b) => order[a.kind] - order[b.kind]));
          setStoreReady(pkgs.length > 0);
        }
      } catch {
        // Store unavailable (no network, misconfigured product) — the cached
        // entitlement keeps paying users unlocked offline.
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [applyCustomerInfo]);

  const purchase = useCallback(
    async (plan: PlanOption) => {
      if (!isNative || !plan.pkg) {
        return { ok: false, error: "Оформить подписку можно в приложении для iOS или Android." };
      }
      try {
        const { Purchases } = await import("@revenuecat/purchases-capacitor");
        const { customerInfo } = await Purchases.purchasePackage({ aPackage: plan.pkg });
        applyCustomerInfo(customerInfo);
        return { ok: Boolean(customerInfo.entitlements.active[SUBSCRIPTION.entitlementId]) };
      } catch (e) {
        const err = e as { userCancelled?: boolean; code?: string; message?: string };
        if (err.userCancelled || err.code === "1") return { ok: false, cancelled: true };
        return { ok: false, error: err.message || "Покупка не удалась. Попробуйте ещё раз." };
      }
    },
    [applyCustomerInfo],
  );

  const restore = useCallback(async () => {
    if (!isNative) return { ok: false, restored: false, error: "Восстановление доступно в приложении." };
    try {
      const { Purchases } = await import("@revenuecat/purchases-capacitor");
      const { customerInfo } = await Purchases.restorePurchases();
      applyCustomerInfo(customerInfo);
      return {
        ok: true,
        restored: Boolean(customerInfo.entitlements.active[SUBSCRIPTION.entitlementId]),
      };
    } catch (e) {
      return { ok: false, restored: false, error: (e as Error).message };
    }
  }, [applyCustomerInfo]);

  const effectivePremium = !paywallEnabled || isPremium;

  const isLevelLocked = useCallback(
    (level: CEFRLevel) =>
      !effectivePremium && LEVEL_ORDER.indexOf(level) > LEVEL_ORDER.indexOf(FREE_MAX_LEVEL),
    [effectivePremium],
  );

  const value = useMemo<PremiumState>(
    () => ({
      paywallEnabled,
      isNative,
      isPremium: effectivePremium,
      loading,
      inTrial,
      expiresAt,
      willRenew,
      managementUrl,
      plans,
      storeReady,
      purchase,
      restore,
      isLevelLocked,
    }),
    [effectivePremium, loading, inTrial, expiresAt, willRenew, managementUrl, plans, storeReady, purchase, restore, isLevelLocked],
  );

  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>;
}

export function usePremium(): PremiumState {
  const ctx = useContext(PremiumContext);
  if (!ctx) throw new Error("usePremium must be used inside PremiumProvider");
  return ctx;
}
