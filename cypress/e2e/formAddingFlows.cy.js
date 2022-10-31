describe("adding reservation flows", () => {
  //  beforeEach(() => {
  //    cy.intercept("http://localhost:3001/api/v1/reservations", {
  //      fixture: "mockReservations.json",
  //    }).as("reservations");

  //    cy.visit("http://localhost:3000/");
  //  });
  it("should be able to add a reservation", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[placeholder="Name"]').type("Hazel");
    cy.get('[placeholder="Date (mm/dd)"]').type("04/06");
    cy.get('[placeholder="Time"]').type("730");
    cy.get('[placeholder="Number of guests"]').type("4");
    cy.get(".reservation-form > button").click();
  });
  it("should see new reservation populate", () => {
    cy.get(".reservation-card-container > :nth-child(10)").contains("Hazel");
  });
});
