import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is published at https://jhnkaptain.github.io/john-makokha-cv/,
// so every file lives under /john-makokha-cv/.
export default defineConfig({
  plugins: [react()],
  base: '/john-makokha-cv/',
})
