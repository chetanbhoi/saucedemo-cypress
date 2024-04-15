export const LOCATORS = {
    login: {
        username: "[data-test='username']",
        password: "[data-test='password']",
        loginButton: '[data-test="login-button"]',
        errorMsg: "[data-test='error']",
        appLogo: "div[class='app_logo']"
    },
    inventory: {
        items: "[data-test='inventory-item']",
        addToCartBtns: "[data-test*='add-to-cart-']",
        removeFromCartBtn: "[data-test*='remove-']",
        cartLink: "[data-test='shopping-cart-link']",
        itemNames: "[data-test='inventory-item-name']",
        itemPrices: "[data-test='inventory-item-price']",
        productSortDropDown:"[data-test='product-sort-container']",
    },
    cart:{
        continueShoppingBtn: "[data-test='continue-shopping']",
        checkoutBtn: "[data-test='checkout']",
        firstNameInputBox: "[data-test='firstName']",
        lastNameInputBox: "[data-test='lastName']",
        zipPostalCodeInputBox: "[data-test='postalCode']",
        continueBtn: "[data-test='continue']",
        priceSubTotal: "[data-test='subtotal-label']",
        finishBtn: "[data-test='finish']",
        successMessage: "[data-test='complete-header']"

    }
};
