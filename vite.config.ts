import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // подпапка на сервере
  base: "/Vue-Firebase-II",
  // Во время сборки для продукции...
  build: {
    // сборка должна быть создана в папке "docs"
    outDir: "docs",
  }
})
