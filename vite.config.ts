import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
  server: {
    port: 3000,      // Port for development server
    strictPort: true // (Optional) Exit if port 3000 is already in use
  },
  preview: {
    port: 3000    // Port for 'vite preview' (production build check)
  }
})
