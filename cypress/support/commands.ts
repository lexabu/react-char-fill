/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { mount, MountOptions, MountReturn } from 'cypress/react18';

// Extend Cypress namespace to include the mount command
declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions,
      ): Chainable<MountReturn>;
    }
  }
}

// Adds a cy.mount command to Cypress
Cypress.Commands.add('mount', (component, options) => {
  return mount(component, options);
});
