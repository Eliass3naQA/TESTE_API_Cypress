## Autor: Elias sena silva
## E-mail: Elias.sena.elg@gmail.com


## Automação de Testes de API com Cypress

Este projeto realiza automação de testes de API utilizando **Cypress** com a abordagem **Page Object Model (POM)**, visando organização, reutilização e manutenção fácil

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- GIT
- faker
- Page Object Model

---

## 📁 Estrutura do projeto

cypress/
├── e2e/
│ └── API_user/
│ └──     users.cy.js
│ └── API_ticket/
│ └──     tickets.cy.js
├── support/
│ ├── apiObjects/
│ │ ├──   user.js
│ │ └──   ticket.js
│ ├── commands/
│ │ ├──   get.js
│ │ ├──   post.js
│ │ ├──   put.js
│ │ └──   delete.js
│ ├── utils/
│ │ ├──   userGenerator.js
│ │ ├──  Commands.js
│ │ ├──  config.js
│ │ ├──  e2e.js
│ │ ├──  index.js
│ ├──  README.md

## Como clonar o projeto

- git clone https://github.com/Eliass3naQA/TESTE_API_Cypress.git

## Como rodar os testes

- Precisa ter a API local rodando `http://localhost:3000`

### 1. execute esses comandos no terminal:

- npm init -y
- npm install cypress --save-dev
- npm install @faker-js/faker --save-dev
- npx cypress open
- escolha um browser de preferencia (Chrome)
- escolha uma Spec para executar primeiro em seguida escolha a outra