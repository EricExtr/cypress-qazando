///<reference types="cypress" />

import common_page from '../../support/pages/common_page'
import login_page from '../../support/pages/login_page'

describe('Login', () => {

    beforeEach('Acessar Login', () => {
        common_page.acessarLoginUsuario()
    })

    it('Login com email vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com email inválido', () => {
        const usuario = login_page.gerarDadosUsuario()

        login_page.preencherEmailInvalido()
        login_page.PreencherSenhaValida(usuario.senha)
        
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com senha vazia', () => {
        const usuario = login_page.gerarDadosUsuario()

        login_page.preencherEmailValido(usuario.email)
        
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.') 
    })

    it('Login com senha inválida', () => {
        const usuario = login_page.gerarDadosUsuario()
        
        login_page.preencherEmailValido(usuario.email)
        login_page.preencherSenhaInvalida()
        
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com sucesso', () => {
        const usuario = login_page.gerarDadosUsuario()

        login_page.preencherFormularioCompleto(usuario)
        
        login_page.clicarLogin()
        login_page.validarLoginSucesso(usuario.email)
    })

})