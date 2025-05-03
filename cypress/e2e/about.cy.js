describe('About Page', () => {
    it('should display about section when About tab is clicked', () => {
      cy.visit('http://localhost:1234');
      cy.get('#aboutPage').click();
  
      cy.contains('About').should('be.visible');
    });
  });
  