import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function manualChunks(id: string): string | undefined {
  if (id.includes('node_modules/blockly')) return 'blockly'
  if (id.includes('node_modules/framer-motion')) return 'framer'
  if (
    id.includes('node_modules/react-router-dom') ||
    id.includes('node_modules/react-dom') ||
    id.includes('node_modules/react/')
  ) {
    return 'react-vendor'
  }
}

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
