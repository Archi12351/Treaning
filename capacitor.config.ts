import type { CapacitorConfig } from '@capacitor/cli'

// Native shells for the App Store and Google Play. The web app is built into
// dist/ with `npm run build:native` and copied into android/ and ios/ by
// `npx cap sync`. See MONETIZATION.md for the full release checklist.
const config: CapacitorConfig = {
  appId: 'com.movingua.app',
  appName: 'Movingua',
  webDir: 'dist',
  backgroundColor: '#020617',
  android: {
    allowMixedContent: false,
  },
  ios: {
    contentInset: 'always',
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_icon',
      iconColor: '#10b981',
    },
  },
}

export default config
