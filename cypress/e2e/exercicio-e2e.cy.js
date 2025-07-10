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

        // Seleciona e adiciona 4 produtos ao carrinho
        cy.get('.widget-inner .products .product').eq(1).find('.groups-button').should('exist').click();

        // Seleciona a cor, tamanho do produto e quantidade
        cy.get('.widget-inner .products .product').eq(1).click();
        cy.get(':nth-child(1) > .value > .variable-items-wrapper li').eq(0).click(); // Seleciona a primeira cor
        cy.get(':nth-child(2) > .value > .variable-items-wrapper li').eq(1).click(); // Seleciona o segundo tamanho
        cy.get('.input-text').clear().type('4');
        cy.get('.single_add_to_cart_button').click();

        // Vai para o carrinho
        cy.get('#cart > .dropdown-toggle').click();
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click();

        // Valida se há 4 produtos no carrinho
        cy.get('.cart_item > .product-name').should('be.visible');

        // Preenche os dados obrigatórios do checkout
        cy.get('#billing_first_name').type('João');
        cy.get('#billing_last_name').type('Silva');
        cy.get('#billing_address_1').type('Rua Teste, 123');
        cy.get('#billing_city').type('São Paulo');
        cy.get('#billing_postcode').type('01000-000');
        cy.get('#billing_phone').type('11999999999');
        cy.get('#billing_email').type('joao@teste.com');

        // Finaliza a compra
        cy.get('#terms').check();
        cy.contains('Finalizar compra').click();

        // Valida mensagem de pedido recebido
        cy.get('.woocommerce-notice').should('be.visible');
    });
});