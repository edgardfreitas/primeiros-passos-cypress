class MyInfoPage {

  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      genericComboBox: ".oxd-select-text--arrow",
      secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
      thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']" 
    }

    return selectors
  }

  fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
    cy.get(this.selectorsList().dateCloseButton).click()
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  }

  fillStatus() {
    cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
    cy.get(this.selectorsList().secondItemCombobox).click()
    cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
    cy.get(this.selectorsList().thirdItemCombobox).click()
  }

}

export default MyInfoPage
