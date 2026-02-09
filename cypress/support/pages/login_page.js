///<reference types="cypress" />

import { faker } from '@faker-js/faker';

export default {

    gerarDadosUsuario() {
        return {
            email: faker.internet.email(),
            senha: faker.internet.password()
        }
    },

    preencherFormularioCompleto(usuario){
        this.preencherEmailValido(usuario.email)
        this.PreencherSenhaValida(usuario.senha)
    },

    clicarLogin(){
        cy.get('#btnLogin').click()
    },

    preencherEmailValido(email) {
        cy.get('#user').type(email)
    },

    PreencherSenhaValida(password){
        cy.get('#password').type(password)
    },

    preencherEmailInvalido() {
        cy.get('#user').type('emailsem_arroba.com')
    },

    preencherSenhaInvalida() {
        cy.get('#password').type('12345')
    },

    validarMensagemErro(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .and('have.text', message)
    },

    validarLoginSucesso(email){
        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('contain', `Olá, ${email}`)
    },

}
