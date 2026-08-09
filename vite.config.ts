import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

function getCommitSha(): string {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    return ''
  }
}

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
  define: {
    __COMMIT_SHA__: JSON.stringify(getCommitSha()),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
