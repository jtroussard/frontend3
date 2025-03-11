describe('Public Route Tests', () => {
  it('Visits the Landing Page and checks redirection to Login', () => {
    cy.visit('http://localhost:5173')
    cy.wait(250)
    cy.url().should('eq', 'http://localhost:5173/login')
  })
})

describe('Login Form Functionality Tests', () => {
  it('Wrong credentials', () => {
    cy.visit('http://localhost:5173/login')

    // Ensure the username field is focused initially
    cy.focused().should('have.attr', 'id', 'username')

    // Type into username and password fields
    cy.get('#username').type('Foo')
    cy.get('#password').type('bar')

    // Verify that the values were typed correctly
    cy.get('#username').should('have.value', 'Foo')
    cy.get('#password').should('have.value', 'bar')

    cy.wait(1000)
    cy.get('button').contains('Sign In').click()

    cy.contains('No Server Response!!!!').should('be.visible')
  })
})