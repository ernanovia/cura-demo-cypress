import loginPagefrom from "../support/pageObject/loginPage"
const userr = require('../fixtures/user.json')


describe('login testcase', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('login success', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.contains('Make Appointment')
  })

  it('login failed', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('wrong user')
    cy.get('#txt-password').type('wrong password')
    cy.get('#btn-login').click()
    cy.get('.text-danger').should('contain.text', "Login failed!")
  })

  it.only('multiple login failed', () => {
    cy.fixture('user.json').then((user) => {
      user.failed_login.forEach((datauser) => {
        cy.login(datauser.username, datauser.password)
        cy.get('.text-danger').should('be.visible')
      })
    })
  })
})