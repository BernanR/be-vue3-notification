// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'be-vue3-notification',
      // the proper extensions will be added
      fileName: (format) => `be-vue3-notification.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  } ,
  plugins: [vue()]
})