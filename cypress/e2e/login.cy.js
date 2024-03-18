import loginPagefrom from "../support/pageObject/loginPage"
const userr = require('../fixtures/user.json')
const daysjs = require('dayjs')


describe('login testcase', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it.skip('multiple login failed', () => {
    cy.fixture('user.json').then((user) => {
      user.failed_login.forEach((datauser) => {
        cy.login(datauser.username, datauser.password)
        cy.get('.text-danger').should('be.visible')
      })
    })
  })

  it('login success', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.contains('Make Appointment')
  })

  // - book appoitment success select Tokyo CURA Healthcare Center
  it('book appoitment success select Tokyo CURA Healthcare Center', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click()
    cy.contains('Medicaid').click()

    cy.log(daysjs().format('DD/MM/YYYY')) // print date
    cy.get('#txt_visit_date').type(daysjs().format('DD/MM/YYYY'))
    // cy.get(':nth-child(5) > .col-sm-offset-3').click()
    cy.contains('Comment').click()

    cy.get('#txt_comment').type('ini contoh komen untuk bookin appoitment')
    cy.get('#btn-book-appointment').click()
    cy.contains('Go to Homepage').click()
    cy.contains('Make Appointment')

  })
  // - book appoitment success select Hongkong CURA Healthcare Center
  // - book appoitment success select Seoul CURA Healthcare Center
  // - book appoitment success select yes to Apply for hospital readmission
  // - book appoitment success select no to Apply for hospital readmission
  // - book appoitment success select Healthcare Program Medicare 
  // - book appoitment success select Healthcare Program Medicaid 
  // - book appoitment success select Healthcare Program None
  // - book appoitment failed mandatory visit date is empty
})