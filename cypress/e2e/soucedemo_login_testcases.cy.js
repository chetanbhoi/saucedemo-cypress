import { login, verifyErrorMessage, verifyLogoText } from "../actions/authActions"

describe("Login Functionality", () =>{
  it("Login with valid credentials", ()=>{
      login("standard_user", "secret_sauce")
      verifyLogoText()
  })

  it("Login with invalid usename and valid password", ()=>{
      login("standard_user1", "secret_sauce")
      verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")
  })

  it("Login with valid usename and invalid password", ()=>{
      login("standard_user", "secret_sauce1")
      verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")
  })

  it("Login with locked credentials", ()=>{
      login("locked_out_user", "secret_sauce")
      verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.")
  })
})