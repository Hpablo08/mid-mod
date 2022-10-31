// describe('empty spec', () => {
//  cy.intercept({
//    method: "POST",
//    url: "http://localhost:3001/api/v1/reservations",
//  }).as("apiCheck");

//  cy.visit("http://localhost:3000");
//  cy.wait("@apiCheck").then((interception) => {
//    assert.isNotNull(interception.response.body, "1st API call has data");
//  });
// })