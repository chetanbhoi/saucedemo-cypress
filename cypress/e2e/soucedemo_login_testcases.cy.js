import { login, verifyErrorMessage, verifyLogoText } from "../actions/authActions"

describe("Login Functionality", () =>{
    
    let testdata;  // Declare a variable to hold your fixture data
    before(() => {
        cy.fixture('testdata').then((data) => {
        testdata = data;  // Assign the fixture data to the variable
        });
    });

    it("Login with valid credentials", ()=>{
        login(testdata.users.stdUsername, testdata.users.stdUserpassword)
        verifyLogoText()
    })

    it("Login with invalid usename and valid password", ()=>{
        login("standard_user1", testdata.users.stdUserpassword)
        verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")
    })

    it("Login with valid usename and invalid password", ()=>{
        login(testdata.users.stdUsername, "secret_sauce1")
        verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")
    })

    it("Login with locked credentials", ()=>{
        login(testdata.users.lockedUsername, testdata.users.lockedUserpassword)
        verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.")
    })
})