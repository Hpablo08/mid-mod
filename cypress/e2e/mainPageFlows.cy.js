describe('main page flows', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/reservations", {
      fixture: "mockReservations.json",
    }).as("reservations");

    cy.visit("http://localhost:3000/?name=Hazel&date=04%2F22&time=6&number=5");
  });
  it('Should be able to view the home page', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
    cy.get(".reservation-form")
    cy.get(".reservation-form > button").contains('Make Reservation')
    cy.get(".reservation-card-container > :nth-child(1)");
    cy.get(".reservation-card-container")
  })
})