describe('Study Night App - Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('should display the main header', () => {
    cy.get('[data-cy="header"]').should('contain.text', 'Study Night')
  })

  it('should display navigation menu items', () => {
    cy.get('#homePage').should('contain.text', 'Home')
    cy.get('#aboutPage').should('contain.text', 'About')
    cy.get('#cardSetPage').should('contain.text', 'Card Sets')
  })
})
