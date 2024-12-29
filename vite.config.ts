import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
    },
  },
})
