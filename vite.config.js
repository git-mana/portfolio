import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})
