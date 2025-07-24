
Cypress.Commands.add('adicionarProdutoAoCarrinho', (produtoIndex, corIndex, tamanhoIndex, quantidade) => {
    cy.get('.widget-inner .products .product').eq(produtoIndex).find('.groups-button').should('exist').click();
    cy.get('.widget-inner .products .product').eq(produtoIndex).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
});
Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

