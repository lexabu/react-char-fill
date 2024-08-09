/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
import { mount } from 'cypress/react18';
// Adds a cy.mount command to Cypress
Cypress.Commands.add('mount', (component, options) => {
    return mount(component, options);
});
