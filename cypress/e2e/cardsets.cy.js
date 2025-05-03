describe('Card Sets Page', () => {
    it('should display flashcards when Card Sets is clicked', () => {
      cy.visit('http://localhost:1234');
      cy.get('#cardSetPage').click();
  
      cy.get('.cardSets').should('exist');
    });
  });
  
