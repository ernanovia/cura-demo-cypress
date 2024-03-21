class AppoinmentPage {
    facilityField = '#combo_facility'
    readmissionCheklist = '#chk_hospotal_readmission'
    // healthProgramField = 
    visitDateField = '#txt_visit_date'
    commentField = '#txt_comment'
    bookBtn = '#btn-book-appointment'
    datePicker = '.datepicker'

    inputFacility(facility) {
        cy.get(this.facilityField).select(facility)
    }

    inputReadmission(readmissionCheklist) {
        cy.get(this.readmissionCheklist).click()
    }

    inputHealthProgram(healthProgram) {
        cy.contains(healthProgram).click()
    }

    inputVisitDate(visitdate) {
        cy.get(this.visitDateField).type(visitdate)
    }

    inputComment(comment) {
        cy.get(this.commentField).type(comment)
    }

    clikBookBtn(bookBtn) {
        cy.get(this.bookBtn).click()
    }

    verifyBookError(errorMsg) {
        cy.contains(errorMsg)
    }

    clickGotohomeBtn(homeBtn) {
        cy.contains('Go to Homepage').click()
    }

    verifyUrlDaasboard(urlDasboard){
        cy.url().should('include', urlDasboard)
    }


}

export default new AppoinmentPage()