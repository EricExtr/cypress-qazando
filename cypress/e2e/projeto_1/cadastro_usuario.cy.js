///<reference types="cypress" />

import common_page from '../../support/pages/common_page'
import cadastro_usuario_page from '../../support/pages/cadastro_usuario_page'
describe('Cadastro de usuário', () => {

    beforeEach('Acessar Cadastro de usuário', () => {
        common_page.acessarCadastroUsuario()
    })
    it('Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        const user = cadastro_usuario_page.gerarDadosUsuario()
        cadastro_usuario_page.preencherNome(user.nome)
        
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail inválido', () => {
        const user = cadastro_usuario_page.gerarDadosUsuario()
        cadastro_usuario_page.preencherNome(user.nome)
        cadastro_usuario_page.preencherEmailInvalido()
        cadastro_usuario_page.preencherSenhaValida(user.senha)

        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        const user = cadastro_usuario_page.gerarDadosUsuario()
        cadastro_usuario_page.preencherNome(user.nome)
        cadastro_usuario_page.preencherEmailValido(user.email)

        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválido', () => {
        const user = cadastro_usuario_page.gerarDadosUsuario()
        cadastro_usuario_page.preencherNome(user.nome)
        cadastro_usuario_page.preencherEmailValido(user.email)
        cadastro_usuario_page.preencherSenhaInvalida()

        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', () => {
        const user = cadastro_usuario_page.gerarDadosUsuario()
        cadastro_usuario_page.preencherFormularioCompleto(user)
        
        cadastro_usuario_page.clicarCadastrar()

        cadastro_usuario_page.cadastroComSucesso(user.nome)
    })

})