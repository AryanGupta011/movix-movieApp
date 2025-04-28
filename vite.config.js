// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassEmbedded from 'sass-embedded'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // force Vite to use the new embedded compiler...
        api: 'modern-compiler',
        implementation: sassEmbedded,
        // ...and mute just the legacy‐js‐api warning
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
