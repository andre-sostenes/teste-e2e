class CheckoutPage {
    clicarNoCarrinho() {
        cy.get('#cart > .dropdown-toggle').click();
    }

    clicarNoBotaoCheckout() {
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click(); // seletor otimizado
    }

    preencherDadosCheckout(dados) {
        cy.get('#billing_first_name').type(dados.nome);
        cy.get('#billing_last_name').type(dados.sobrenome);
        cy.get('#billing_address_1').type(dados.endereco);
        cy.get('#billing_city').type(dados.cidade);
        cy.get('#billing_postcode').type(dados.cep);
        cy.get('#billing_phone').type(dados.telefone);
        cy.get('#billing_email').type(dados.email);
    }

    finalizarCompra() {
        cy.get('#terms').check();
        cy.contains('Finalizar compra').click();
    }

    validarPedidoRecebido() {
        cy.get('.woocommerce-notice').should('be.visible');
    }
}

export default new CheckoutPage();
