
// Esse import abaixo esta importando as informações do arquivo tickets na pasta APIObjects
import tickets from "../../support/APIObjects/tickets";

// nesse arquivo esta todos os cenario que serão executador
// instale o extensios Add only para selecionar um cenario especifico e não todos se preferir
// Escolha ID existente

describe('API de tickets', () => {

it('GET ticket por id', () => {
  const userId = 3;
  tickets.getById(userId).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.have.property('id', userId);
    expect(res.body).to.have.property('description', "I can't log into my email account.");
    expect(res.body).to.have.property('status', 'Closed');
    cy.log(JSON.stringify(res.body));
  });
});

  it('Cria um novo ticket', () => {
   tickets.postById({ userId: 2, description: 'Teste POST Elias'}).then((res) => {
    expect(res.status).to.eq(201);
    expect(res.body).to.have.property('userId', userId);
    expect(res.body).to.have.property('description', 'Teste POST Elias');
    cy.log(JSON.stringify(res.body));
  });
});

  it.only('Atualiza status ticket', () => {
    const userId = 3;
    tickets.putById(userId, { status: 'Teste PUT ticket'}).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('message', 'Ticket status updated successfully.');
      expect(res.body.ticket).to.have.property('id', userId);
      expect(res.body.ticket).to.have.property('status', 'Teste PUT ticket');
      cy.log(JSON.stringify(res.body));
    });
  });

  it('Excluir ticket', () => {
    const userId = 5; //escolha um ID valido
    tickets.deleteById(userId).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('message', 'Ticket deleted successfully.');
      expect(res.body.ticket).to.have.property('id', userId);
      cy.log(JSON.stringify(res.body));
    });
  });
});
