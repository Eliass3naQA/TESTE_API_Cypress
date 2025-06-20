import user from "../../support/APIObjects/user";
import { generateUser } from '../../support/utils/userGenerator';

describe('API de Usuários', () => {

  it('Busca todos os usuários', () => {
    user.getAll().then((res) => {
      expect(res.status).to.eq(200);
      cy.log(JSON.stringify(res.body));
    });
  });


it('GET usuario por id', () => {
  const userId = 1;
  user.getById(userId).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.have.property('id', userId);
    expect(res.body).to.have.property('name', 'Ivete Sangalo');
    expect(res.body).to.have.property('email', 'ivete.sangalo@hotmail.com');
    cy.log(JSON.stringify(res.body));
  });
});

  it('Cria um novo usuário', () => {
  const newUser = generateUser();

  user.create(newUser).then((res) => {
    expect(res.status).to.eq(201);
    expect(res.body).to.have.property('name', newUser.name);
    expect(res.body).to.have.property('email', newUser.email);
    cy.log(JSON.stringify(res.body));
  });
});

 

  it('Atualiza nome do usuário', () => {
    const userId = 5;
    user.update(userId, { name: 'Elias Atualizado' }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('message', 'User updated successfully.');
      expect(res.body.user).to.have.property('id', userId);
      expect(res.body.user).to.have.property('name', 'Elias Atualizado');
      cy.log(JSON.stringify(res.body));
    });
  });

  it('Deleta o usuário', () => {
    const userId = 8;
    user.delete(userId).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('message', 'User deleted successfully.');
      expect(res.body.user).to.have.property('id', userId);
      cy.log(JSON.stringify(res.body));
    });
  });
});
