import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  ...defineConfig({
    plugins: [react()],
    build: {
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    },
  }),

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {},
    },
  },
};
