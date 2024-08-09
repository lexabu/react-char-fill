// cypress.config.mjs

import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {},
    },
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
  },
});
