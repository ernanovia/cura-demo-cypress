// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPagefrom from "../support/pageObject/loginPage"
import appoinmentPage from "../support/pageObject/appoinmentPage"
const userr = require('../fixtures/user.json')
const daysjs = require('dayjs')

Cypress.Commands.add('login', (username, password) => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type(username)
    cy.get('#txt-password').type(password)
    cy.get('#btn-login').click()
})

Cypress.Commands.add('bookappoinment', (facility, healthcareProgram, comment) => {
    appoinmentPage.inputFacility(facility)
    appoinmentPage.inputReadmission()
    appoinmentPage.inputHealthProgram(healthcareProgram)
    appoinmentPage.inputVisitDate(daysjs().format('DD/MM/YYYY'))
    cy.contains('Comment').click()
    appoinmentPage.inputComment(comment)
    appoinmentPage.clikBookBtn()
})

Cypress.Commands.add('verifyData', (value) => {
    cy.contains(value)
})
