Cypress.Commands.add('apiPut', (endpoint, body) => {
  return cy.request({
    method: 'PUT',
    url: endpoint,
    body,
    failOnStatusCode: false
  });
});
