// Single source of truth for everything brand- and store-related, so a rename
// or new price plan is a one-file change. See MONETIZATION.md.

export const BRAND = {
  // Movingua = moving + lingua: «язык для переезда и жизни за границей».
  name: "Movingua",
  tagline: "Язык для жизни за границей",
  // Reverse-DNS id used by Capacitor / App Store / Google Play. Must match a
  // domain you control before the first store upload — it can't be changed later.
  appId: "com.movingua.app",
  supportEmail: "support@movingua.app",
  // Hosted with the app (public/privacy.html, public/terms.html). Store
  // listings require public URLs — after deploying, use the absolute ones.
  privacyUrl: "privacy.html",
  termsUrl: "terms.html",
};

export const SUBSCRIPTION = {
  // RevenueCat entitlement that unlocks Premium. Create it in the RevenueCat
  // dashboard and attach the monthly + yearly products to it.
  entitlementId: "premium",
  // Shown only as a fallback when the store hasn't returned real prices yet
  // (e.g. web preview). The paywall always shows the store's localized price
  // when available — never hardcode prices in the purchase button itself.
  trialDays: 7,
  // Remind the user this many days before the trial converts to paid.
  trialReminderDaysBefore: 2,
};

// Public RevenueCat SDK keys (safe to ship in the app). Set at build time:
// VITE_RC_IOS_KEY=appl_xxx VITE_RC_ANDROID_KEY=goog_xxx npm run build:native
export const REVENUECAT_KEYS = {
  ios: import.meta.env.VITE_RC_IOS_KEY as string | undefined,
  android: import.meta.env.VITE_RC_ANDROID_KEY as string | undefined,
};

// The free tier: everything up to and including this CEFR level is free in
// every language — enough to genuinely learn and judge the app before paying.
export const FREE_MAX_LEVEL = "A2" as const;
