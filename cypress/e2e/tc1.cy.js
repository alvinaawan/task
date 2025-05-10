describe('Counter App', () => {
  it('Counter Sets to 1', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
  })
})
