const baseUrl = 'http://localhost:3000/tickets';

class ticketsAPI {

   getById(id) {
    return cy.apiGet(`${baseUrl}/${id}`);
  }

  postById(payload) {
    return cy.apiPost(baseUrl, payload);
  }

  putById(id, payload) {
    return cy.apiPut(`${baseUrl}/${id}/status`, payload);
  }

  deleteById(id) {
    return cy.apiDelete(`${baseUrl}/${id}`);
  }
}

export default new ticketsAPI();