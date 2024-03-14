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
})