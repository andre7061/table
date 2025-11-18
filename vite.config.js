import { defineConfig } from 'vite';

export default defineConfig({
  base: '/table/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
