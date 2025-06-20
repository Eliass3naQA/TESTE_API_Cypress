Cypress.Commands.add('apiPost', (endpoint, body) => {
  return cy.request({
    method: 'POST',
    url: endpoint,
    body,
    failOnStatusCode: false
  });
});
