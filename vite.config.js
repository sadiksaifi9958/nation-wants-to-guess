import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/nation-wants-to-guess/',
  plugins: [react(), tailwindcss()],
})