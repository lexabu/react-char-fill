import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs-netlify',
    sourcemap: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/demo/index.html'),
    },
  },
  server: {
    open: true,
  },
});
