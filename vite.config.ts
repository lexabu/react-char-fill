import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './src/demo',
  plugins: [react()],
  build: {
    outDir: '../../docs', // Output the demo build to the docs directory
    rollupOptions: {
      input: path.resolve(__dirname, 'src/demo/index.html'),
    },
  },
  server: {
    open: true,
  },
});
