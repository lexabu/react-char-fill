/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// types/cypress.d.ts

/// <reference types="cypress" />

import { MountOptions, MountReturn } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mount(
        component: React.ReactNode,
        options?: MountOptions,
      ): Chainable<MountReturn>;
    }
  }
}
