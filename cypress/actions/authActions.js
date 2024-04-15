import { LOCATORS } from "./locators";

/**
 * It will login to applicaiton
 * @param {*} username 
 * @param {*} password 
 */
export function login(username, password) {
    cy.visit('https://www.saucedemo.com/');
    cy.get(LOCATORS.login.username).type(username);
    cy.get(LOCATORS.login.password).type(password);
    cy.get(LOCATORS.login.loginButton).click();
}

/**
 * It will verify logo text after successfully login
 */
export function verifyLogoText(){
    cy.get(LOCATORS.login.appLogo).should("have.text","Swag Labs")
}

/**
 * It will verify validation message on submitting invalid credentials
 * @param {*} message 
 */
export function verifyErrorMessage(message){
    cy.get(LOCATORS.login.errorMsg).should("have.text",message)
}
