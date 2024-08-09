import { MountOptions, MountReturn } from 'cypress/react18';
declare global {
    namespace Cypress {
        interface Chainable {
            mount(component: React.ReactNode, options?: MountOptions): Chainable<MountReturn>;
        }
    }
}
