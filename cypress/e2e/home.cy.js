describe('Home Page', () => {
  it('should load the homepage and show the main header', () => {
    cy.visit('http://localhost:1234');
    cy.get('[data-cy="header"]').should('contain.text', 'Study Night');
  });
});
