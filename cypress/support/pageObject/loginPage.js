class LoginPage {
    btnAppoitment = '#btn-make-appointment'
    username = '#txt-username'
    password = '#txt-password'
    loginBtn = '#btn-login'
    errorMsgLogin = '.text-danger'

    clikAppoitmentBtn(btnAppoitment) {
        cy.get(this.btnAppoitment).click()
    }

    inputUsername(username) {
        cy.get(this.username).type(username)
    }

    inputPassword(password) {
        cy.get(this.password).type(password)
    }

    clikLoginBtn(loginBtn) {
        cy.get(this.loginBtn).click()
    }

    verifyLoginError(errorMsg) {
        cy.get(this.errorMsgLogin).should('have-text', this.errorMsg)
    }

}

export default new LoginPage()