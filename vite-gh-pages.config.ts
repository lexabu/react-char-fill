import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    sourcemap: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/demo/index.html'),
    },
  },
  base: '/react-char-fill/',
  server: {
    open: true,
  },
});
