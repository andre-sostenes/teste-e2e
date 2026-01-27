describe('Teste de exemplo - EBAC Shop', () => {
  it('Deve acessar a página inicial e verificar o título', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.title().should('include', 'EBAC Shop')
  })

  it('Deve navegar até a página de login', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
})
