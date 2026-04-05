import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // ← CHANGE THIS (from '/' to './')
  // OR try:
  // base: '/frontend/',
})