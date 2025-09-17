import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Change "beauty-ar-starter" to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/beauty-ar-starter/',
})
