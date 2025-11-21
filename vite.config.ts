import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for GitHub Pages. 
  // It ensures that whether your site is at username.github.io or username.github.io/repo-name,
  // the links will work correctly.
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})