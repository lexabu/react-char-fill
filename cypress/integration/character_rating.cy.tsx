/// <reference types="cypress" />

import CharacterRating from '../../src/CharacterRating/CharacterRating';

describe('Character Rating Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(
      <CharacterRating
        rating={3}
        character="★"
        maxRating={5}
        step={1}
        fontSize="20px"
        fillColor="red"
        emptyColor="gray"
      />,
    );
  });

  it('should render the component with default props', () => {
    cy.get('.rating-container').should('exist');
    cy.get('.rating-container .rating-symbol').should('have.length', 5);
  });

  it('should render the correct rating based on the rating prop', () => {
    // Get the container for the rating component
    cy.get('.rating-container').then($container => {
      // Use .then() to access the container element
      const ariaLabel = $container.attr('aria-label'); // Get the 'aria-label' attribute of the container
      const ariaValueNow = $container.attr('aria-valuenow'); // Get the 'aria-valuenow' attribute
      const ariaValueMin = $container.attr('aria-valuemin'); // Get the 'aria-valuemin' attribute
      const ariaValueMax = $container.attr('aria-valuemax'); // Get the 'aria-valuemax' attribute
      const role = $container.attr('role'); // Get the 'role' attribute
      const tabIndex = $container.attr('tabindex'); // Get the 'tabindex' attribute

      // Log all the attributes and details to the Cypress command log and browser console
      cy.log('Container Details:');
      cy.log('aria-label:', ariaLabel);
      cy.log('aria-valuenow:', ariaValueNow);
      cy.log('aria-valuemin:', ariaValueMin);
      cy.log('aria-valuemax:', ariaValueMax);
      cy.log('role:', role);
      cy.log('tabindex:', tabIndex);

      console.log('Container Details:');
      console.log('aria-label:', ariaLabel);
      console.log('aria-valuenow:', ariaValueNow);
      console.log('aria-valuemin:', ariaValueMin);
      console.log('aria-valuemax:', ariaValueMax);
      console.log('role:', role);
      console.log('tabindex:', tabIndex);
    });

    // Get the third rating symbol in the container (index 2 because it starts from 0)
    cy.get('.rating-container .rating-symbol')
      .eq(2) // Select the third rating symbol (index 2)
      .find('span') // Find all <span> elements within this symbol
      .last() // Select the last <span> element, which is the filled star
      .then($span => {
        // Use .then() to access the selected element and work with it
        const width = $span.css('width'); // Get the CSS 'width' property of the selected <span>
        const color = $span.css('color'); // Get the CSS 'color' property of the selected <span>
        const fontSize = $span.css('font-size'); // Get the CSS 'font-size' property of the selected <span>

        // Log all the CSS properties to the Cypress command log and browser console
        cy.log('Star Details:');
        cy.log('Width:', width);
        cy.log('Color:', color);
        cy.log('Font Size:', fontSize);

        console.log('Star Details:');
        console.log('Width:', width);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);

        expect(width).to.equal('20px'); // Adjust this to match your expectation
      });

    // Get the fourth rating symbol in the container (index 3)
    cy.get('.rating-container .rating-symbol')
      .eq(3) // Select the fourth rating symbol (index 3)
      .find('span') // Find all <span> elements within this symbol
      .last() // Select the last <span> element, which is the filled star
      .should('have.css', 'width', '0px'); // Assert that the width is '0px' (indicating it's not filled)
  });

  it('should allow users to set a rating by clicking on characters', () => {
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

    cy.get('.rating-container .rating-symbol').eq(2).click();
    cy.get('@onClick').should('have.been.called');
  });

  it('should apply correct styles based on props', () => {
    cy.get('.rating-container .rating-symbol')
      .eq(2)
      .find('span')
      .last()
      .should('have.css', 'color', 'rgb(255, 0, 0)'); // Expect the fill color to be red
    cy.get('.rating-container .rating-symbol')
      .eq(4)
      .find('span')
      .first()
      .should('have.css', 'color', 'rgb(128, 128, 128)'); // Expect the empty color to be gray
    cy.get('.rating-container .rating-symbol')
      .first()
      .find('span')
      .should('have.css', 'font-size', '20px'); // Ensure the font size is 20px
  });
});
