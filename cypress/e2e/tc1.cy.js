describe('Counter App', () => {
  it('Verify that the counter is Incremented/Decremented by 1 on pressing the increment or decrement button respectively.', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('#counter').should('have.text', '0');

//Verify the increment and decrement button
    cy.get('#increment-btn').should('exist');
    cy.get('#decrement-btn').should('exist');

//Verify the functionality of the increment button
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
   

//Click the increment button multiple times
   Cypress._.times(3, () => {
    cy.get('#increment-btn').click();
})

    cy.get('#counter').should('have.text', '4');
    
//Click the decrement button multiple times
   Cypress._.times(4, () => {
    cy.get('#decrement-btn').click();

})

  cy.get('#counter').should('have.text', '0');

  })
})
