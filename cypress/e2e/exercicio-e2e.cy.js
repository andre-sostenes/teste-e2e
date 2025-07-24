import checkout from '../support/page_objects/checkout.page';
/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
            Quero acessar a Loja EBAC 
            Para fazer um pedido de 4 produtos 
            Fazendo a escolha dos produtos
            Adicionando ao carrinho
            Preenchendo todas opções no checkout
            E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        // Adiciona produto usando comando customizado
        cy.adicionarProdutoAoCarrinho(1, 0, 1, 4);

        // Fluxo de checkout usando Page Object
        checkout.clicarNoCarrinho();
        checkout.clicarNoBotaoCheckout();
        cy.get('.cart_item > .product-name').should('be.visible');
        checkout.preencherDadosCheckout({
            nome: 'João',
            sobrenome: 'Silva',
            endereco: 'Rua Teste, 123',
            cidade: 'São Paulo',
            cep: '01000-000',
            telefone: '11999999999',
            email: 'joao@teste.com'
        });
        checkout.finalizarCompra();
        checkout.validarPedidoRecebido();
    });
});