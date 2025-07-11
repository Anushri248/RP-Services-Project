import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all local IPs
    port: 3000,
  },
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.JPEG', '**/*.png', '**/*.PNG', '**/*.gif', '**/*.GIF', '**/*.svg', '**/*.SVG', '**/*.webp', '**/*.WEBP'],
}) 