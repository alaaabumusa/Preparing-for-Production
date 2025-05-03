describe('Add New Set Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
      cy.get('#cardSetPage').click();
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').should('be.visible');
    });
  
    it('should add a new set when title is valid (happy path)', () => {
      cy.get('#titleInput').type('Frontend Basics');
      cy.get('input[type="submit"]').click();
  
      cy.contains('Frontend Basics').should('exist');
    });
  
    it('should show error when title is empty (unhappy path)', () => {
      cy.get('#titleInput').clear();
      cy.get('input[type="submit"]').click();
  

      cy.contains('TITLE CANNOT BE EMPTY').should('exist');
    });
  });
  