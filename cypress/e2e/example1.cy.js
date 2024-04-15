import { login, verifyLogoText } from "../actions/authActions"
import { addItemToCartByName, navigateToCartPage, verifyItemsLengthInCart, verifyItemVisible } from "../actions/cartActions";

const product1 = "Sauce Labs Backpack"
const product2 = "Sauce Labs Bike Light"

describe("Shopping Cart Functionality", () =>{
    beforeEach(() => {
        login("standard_user", "secret_sauce")
        verifyLogoText()
      });

    it("Add and Remove products into cart", ()=>{
        addItemToCartByName(product1)
        addItemToCartByName(product2)
        navigateToCartPage()
        verifyItemsLengthInCart(2)
        verifyItemVisible(product1)
        verifyItemVisible(product2)
    })

    it("Updated products Quantity into cart and verify prices", ()=>{
        
    })
    
})