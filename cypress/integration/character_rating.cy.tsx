/// <reference types="cypress" />

import CharacterRating from '../../src/CharacterRating/CharacterRating';

describe('Character Rating Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(
      <CharacterRating rating={3} character="★" maxRating={5} step={1} />,
    );
  });

  it('should render the component with default props', () => {
    // Ensure the component renders with default props
    cy.get('.rating-container').should('exist');
    cy.get('.rating-container .character-fill').should('have.length', 5); // Assuming default is 5 characters
  });

  it('should render the correct number of characters based on maxRating', () => {
    // Re-mount the component with a different maxRating
    cy.mount(
      <CharacterRating rating={3} character="★" maxRating={10} step={1} />,
    );
    cy.get('.rating-container .character-fill').should('have.length', 10);
  });

  it('should render the correct rating based on the rating prop', () => {
    // Re-mount the component with a different rating
    cy.mount(
      <CharacterRating rating={3} character="★" maxRating={5} step={1} />,
    );
    cy.get('.rating-container .character-fill')
      .eq(2)
      .should('have.class', 'filled');
    cy.get('.rating-container .character-fill')
      .eq(3)
      .should('not.have.class', 'filled');
  });

  it('should allow users to set a rating by clicking on characters', () => {
    // Set up a click handler to update the rating
    const onClick = cy.stub().as('onClick');
    cy.mount(
      <CharacterRating
        rating={0}
        character="★"
        maxRating={5}
        step={1}
        onClick={onClick}
      />,
    );

    // Simulate clicking on the third character
    cy.get('.rating-container .character-fill').eq(2).click();

    // Check if the click handler was called
    cy.get('@onClick').should('have.been.called');
  });

  it('should handle invalid prop values gracefully', () => {
    // Mount the component with an invalid rating
    cy.mount(
      <CharacterRating rating={-1} character="★" maxRating={5} step={1} />,
    );

    // Ensure the component still renders
    cy.get('.rating-container').should('exist');
    cy.get('.rating-container .character-fill').should(
      'not.have.class',
      'filled',
    );
  });

  it('should be accessible with appropriate ARIA attributes', () => {
    // Ensure the component has the correct ARIA attributes
    cy.get('.rating-container').should('have.attr', 'role', 'slider');
    cy.get('.rating-container').should('have.attr', 'aria-valuenow', '3');
    cy.get('.rating-container').should('have.attr', 'aria-valuemin', '0');
    cy.get('.rating-container').should('have.attr', 'aria-valuemax', '5');
  });

  it('should apply correct styles based on props', () => {
    // Mount the component with specific style props
    cy.mount(
      <CharacterRating
        rating={3}
        character="★"
        maxRating={5}
        step={1}
        fillColor="red"
        emptyColor="gray"
        fontSize="20px"
      />,
    );

    // Check if the styles are applied correctly
    cy.get('.rating-container .character-fill')
      .eq(2)
      .should('have.css', 'color', 'red');
    cy.get('.rating-container .character-fill')
      .eq(4)
      .should('have.css', 'color', 'gray');
    cy.get('.rating-container .character-fill').should(
      'have.css',
      'font-size',
      '20px',
    );
  });
});
