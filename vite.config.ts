import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src/demo',
  plugins: [react()],
  build: {
    outDir: '../../docs',
  },
  server: {
    open: true,
  },
});
