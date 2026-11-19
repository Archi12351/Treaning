/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AI_BACKEND_URL?: string;
  // "1" turns on the Premium paywall in a web build (native builds always have it).
  readonly VITE_PAYWALL?: string;
  readonly VITE_RC_IOS_KEY?: string;
  readonly VITE_RC_ANDROID_KEY?: string;
  readonly VITE_APP_STORE_URL?: string;
  readonly VITE_PLAY_STORE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
