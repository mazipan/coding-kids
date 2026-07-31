import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'blockly': ['blockly'],
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
        },
      },
    },
  },
})
