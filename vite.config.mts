import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  base: './',
  plugins: [
    react(),
    TanStackRouterVite({
      generatedRouteTree: './routeTree.gen.ts',
      routesDirectory: './routes',
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('./', import.meta.url).pathname,
    },
  },
})
