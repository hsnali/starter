import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react(), svgr(), tsconfigPaths()],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage/vite'
    },
    environment: 'jsdom'
  }
})
