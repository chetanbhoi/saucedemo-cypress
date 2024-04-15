import { login, verifyLogoText } from "../actions/authActions"
import { addItemToCartByName, clickOnCheckoutButton, clickOnContinueButton, 
    clickOnContinueShoppingButton, navigateToCartPage, removeItemFromCartByName, 
    verifyItemsLengthInCart, verifyItemVisible, fillCheckoutInformation, 
    makeTotalOfAllItemPrice, getPriceSubTotal,
    clickOnFinishButton} from "../actions/cartActions";
import { LOCATORS } from "../actions/locators";

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
        cy.url().should('include', '/cart');
        verifyItemsLengthInCart(2)
        verifyItemVisible(product1)
        verifyItemVisible(product2)
        clickOnContinueShoppingButton()
        cy.url().should('include', '/inventory');
        removeItemFromCartByName(product1)
        navigateToCartPage()
        cy.url().should('include', '/cart');
        verifyItemsLengthInCart(1)
        verifyItemVisible(product2)
    })

    it("Updated products into cart and verify prices and checkout order", ()=>{
        addItemToCartByName(product1)
        addItemToCartByName(product2)
        navigateToCartPage()
        cy.url().should('include', '/cart');
        verifyItemsLengthInCart(2)
        removeItemFromCartByName(product1)
        verifyItemsLengthInCart(1)
        clickOnContinueShoppingButton()
        cy.url().should('include', '/inventory');

        addItemToCartByName(product1)
        navigateToCartPage()
        cy.url().should('include', '/cart');

        verifyItemsLengthInCart(2)
        clickOnCheckoutButton()
        cy.url().should('include', '/checkout-step-one');

        fillCheckoutInformation("chetan","bhoi",232322)
        clickOnContinueButton()
        cy.url().should('include', '/checkout-step-two');

        makeTotalOfAllItemPrice().then(totalPrice => {
            getPriceSubTotal().then(subTotal => {
                cy.log("Total Price:", totalPrice.toFixed(2))
                cy.log("SUb total:", subTotal)
                expect(totalPrice, 'Total should match Subtotal').to.equal(subTotal);
            })
        });

        clickOnFinishButton()
        cy.url().should('include','/checkout-complete')
        cy.get(LOCATORS.cart.successMessage).should("have.text",'Thank you for your order!')
    })
    
})