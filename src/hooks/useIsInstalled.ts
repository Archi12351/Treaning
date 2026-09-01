// Detects whether the app is already running as an installed app (Android
// TWA wrapper, or a PWA added to the home screen on Android/iOS) rather than
// in an ordinary mobile browser tab — so we can hide "install this app"
// prompts that make no sense once you're already inside the installed app.
export function isRunningAsInstalledApp(): boolean {
  if (typeof window === "undefined") return false;

  const referrerIsAndroidApp = document.referrer.startsWith("android-app://");

  const isStandaloneDisplay =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(display-mode: standalone)").matches;

  const isIosStandalone =
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

  return referrerIsAndroidApp || isStandaloneDisplay || isIosStandalone;
}
