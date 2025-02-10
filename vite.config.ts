import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { version } from './package.json'

const hash = Date.now();

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].${version}.${hash}.js`,
        chunkFileNames: `[name].${version}.${hash}.js`,
        assetFileNames: `[name].${version}.${hash}.[ext]`
      }
    }
  }
})