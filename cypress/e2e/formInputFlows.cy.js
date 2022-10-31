describe('input flows', () => {
  it('should be able to input in a form', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[placeholder="Name"]').type('Hazel')
    cy.get('[placeholder="Name"]').should("have.value", "Hazel");
    cy.get('[placeholder="Date (mm/dd)"]').type('04/06')
    cy.get('[placeholder="Date (mm/dd)"]').should("have.value", "04/06");
    cy.get('[placeholder="Time"]').type('730')
    cy.get('[placeholder="Time"]').should("have.value", "730");
    cy.get('[placeholder="Number of guests"]').type('4')
    cy.get('[placeholder="Number of guests"]').should("have.value", "4");
  })
})