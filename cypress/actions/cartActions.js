import { LOCATORS } from "./locators";

/**
 * It will add item into the cart which you passed in method
 * @param {*} itemName item name which you want to add into cart
 */
export function addItemToCartByName(itemName) {
    cy.get(LOCATORS.inventory.items).each(($item) => {
        const name = $item.find(LOCATORS.inventory.itemNames).text().trim();
        if (name === itemName) {
            $item.find(LOCATORS.inventory.addToCartBtns).click();
            return false;
        }
    });
}

/**
 * It will remove item from the cart which you passed in method
 * @param {*} itemName item name which you want to remove from the cart
 */
export function removeItemFromCartByName(itemName) {
    cy.get(LOCATORS.inventory.items).each(($item) => {
        const name = $item.find(LOCATORS.inventory.itemNames).text().trim();
        if (name === itemName) {
            $item.find(LOCATORS.inventory.removeFromCartBtn).click();
            return false;
        }
    });
}

/**
 * It will click on cart icon and navigate to shopping cart page
 */
export function navigateToCartPage() {
    cy.get(LOCATORS.inventory.cartLink).click();
}

/**
 * It will verify the length of the total number of itemes in the cart
 * @param {*} expectedCount 
 */
export function verifyItemsLengthInCart(expectedCount) {
    cy.get(LOCATORS.inventory.itemNames).should("have.length", expectedCount);
}

/**
 * Verify the item which is visible or not in the cart
 * @param {*} itemName 
 */
export function verifyItemVisible(itemName) {
    cy.get(LOCATORS.inventory.itemNames).contains(itemName).should('be.visible');
}

/**
 * It will click on Continue Shopping button from cart page
 */
export function clickOnContinueShoppingButton(){
    cy.get(LOCATORS.cart.continueShoppingBtn).click()
}

/**
 * It will click on Checkout button from cart page
 */
export function clickOnCheckoutButton(){
    cy.get(LOCATORS.cart.checkoutBtn).click()
}

/**
 * IT will fill the user details
 * @param {*} fName user first name
 * @param {*} lName user last name
 * @param {*} zipPostalCode user zip or postal code
 */
export function fillCheckoutInformation(fName, lName, zipPostalCode){
    cy.get(LOCATORS.cart.firstNameInputBox).type(fName)
    cy.get(LOCATORS.cart.lastNameInputBox).type(lName)
    cy.get(LOCATORS.cart.zipPostalCodeInputBox).type(zipPostalCode)
}

/**
 * It will click on Continue button from checkout-step-one page
 */
export function clickOnContinueButton(){
    cy.get(LOCATORS.cart.continueBtn).click()
}

/**
 * It will make the total of the all item prices which are added in the cart
 * @returns total price of the itemes
 */
export const makeTotalOfAllItemPrice = () => {
    return cy.get(LOCATORS.inventory.itemPrices).then($prices => {
        // Convert the jQuery collection into an array of prices (floats)
        const prices = $prices.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', '').trim())).get();
        
        // Calculate the total price using Array.reduce()
        return prices.reduce((total, current) => total + current, 0);
    });
}

/**
 * It will get the sub total of the car from cart page
 * @returns sub total of the price
 */
export const getPriceSubTotal = () => {
    return cy.get(LOCATORS.cart.priceSubTotal).then($subtotal => {
        return parseFloat($subtotal.text().replace('Item total: $', '').trim());
    });
}

/**
 * It will click on Finish button from checkout-two-step page
 */
export function clickOnFinishButton(){
    cy.get(LOCATORS.cart.finishBtn).click()
}