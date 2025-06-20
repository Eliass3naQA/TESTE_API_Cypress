const baseUrl = 'http://localhost:3000/users';

class UsersAPI {
  getAll() {
    return cy.apiGet(baseUrl);
  }

   getById(id) {
    return cy.apiGet(`${baseUrl}/${id}`);
  }

  create(payload) {
    return cy.apiPost(baseUrl, payload);
  }

  update(id, payload) {
    return cy.apiPut(`${baseUrl}/${id}`, payload);
  }

  delete(id) {
    return cy.apiDelete(`${baseUrl}/${id}`);
  }
}

export default new UsersAPI();