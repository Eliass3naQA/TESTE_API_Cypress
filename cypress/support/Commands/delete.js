Cypress.Commands.add('apiDelete', (endpoint) => {
  return cy.request({
    method: 'DELETE',
    url: endpoint,
    failOnStatusCode: false
  });
});