///<reference types="cypress" />

import { faker } from '@faker-js/faker';

export default {

    gerarDadosUsuario() {
        return {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            senha: faker.internet.password()
        }
    },

    preencherFormularioCompleto(usuario){
        this.preencherNome(usuario.nome)
        this.preencherEmailValido(usuario.email)
        this.preencherSenhaValida(usuario.senha)
    },

    clicarCadastrar() {
        cy.get('#btnRegister').click()
    },

    validarMensagemErro(message) {
        cy.get('.errorLabel')
            .should('be.visible')
            .and('have.text', message)
    },

    preencherNome(nome) {
        cy.get('#user').type(nome)
    },

    preencherEmailValido(email) {
        cy.get('#email').type(email)
    },

    preencherEmailInvalido() {
        cy.get('#email').type('teste.email.com')
    },

    preencherSenhaValida(password) {
        cy.get('#password').type(password)
    },

    preencherSenhaInvalida() {
        cy.get('#password').type('12345')
    },

    cadastroComSucesso(name) {
        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('contain', `Bem-vindo ${name}`)
    }
}
