import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [react()],
  // Bundle CommonJS deps (pathfinding, immutability-helper) into the prerender build
  // so Node doesn't have to resolve their CJS exports at build time.
  ssr: {noExternal: true},
})
