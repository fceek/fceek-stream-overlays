import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({

  plugins: [vue()],

  // multi entry settings
  build: {
    rollupOptions: {
      input: {
        gallery: resolve(__dirname, 'index.html'),
        timeline: resolve(__dirname, 'timeline/index.html')
      }
    }
  },
})
