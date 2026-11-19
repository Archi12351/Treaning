import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// Web: served from https://<user>.github.io/Treaning/ in production (GitHub
// Pages), from the domain root during local dev/preview.
// Native (`vite build --mode native`, used by `npm run build:native`): the
// bundle is loaded by Capacitor from local files, so it needs relative paths
// and no service worker (the app shell is already bundled into the APK/IPA).
const BASE_PATH = '/Treaning/'
const NAME = 'Movingua'
const DESCRIPTION =
  'Movingua — язык для переезда и жизни за границей: немецкий, английский, французский. Тест на уровень, программа, диалоги в госучреждениях, AI-собеседник.'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const native = mode === 'native'
  const base = native ? './' : command === 'build' ? BASE_PATH : '/'
  return {
    base,
    build: {
      chunkSizeWarningLimit: 2500,
    },
    plugins: [
      react(),
      tailwindcss(),
      ...(native
        ? []
        : [
            VitePWA({
              registerType: 'autoUpdate',
              includeAssets: ['icon.svg'],
              manifest: {
                name: NAME,
                short_name: NAME,
                description: DESCRIPTION,
                theme_color: '#020617',
                background_color: '#020617',
                display: 'standalone',
                orientation: 'portrait',
                start_url: base,
                scope: base,
                icons: [
                  { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
                  { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
                  { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
                ],
              },
              workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                // The content bundles (thousands of words) exceed the 2 MiB default.
                maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
              },
            }),
          ]),
    ],
  }
})
