import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src/demo',
  base: '/react-char-fill/',
  plugins: [react()],
  build: {
    outDir: '../../docs-netlify',
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
