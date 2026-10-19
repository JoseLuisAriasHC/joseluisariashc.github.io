import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const fromRoot = (path: string) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fromRoot('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Solo variables y mixins: lo que se inyecta aquí se repite en cada <style> que lo use
        additionalData: `@use "@/styles/abstracts" as *;\n`,
      },
    },
  },
  build: {
    // Una entrada por idioma: / (es) y /en/ (en)
    rolldownOptions: {
      input: {
        es: fromRoot('./index.html'),
        en: fromRoot('./en/index.html'),
      },
    },
  },
})
