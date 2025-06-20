Cypress.Commands.add('apiGet', (endpoint) => {
  return cy.request({
    method: 'GET',
    url: endpoint,
    failOnStatusCode: false
  });
});