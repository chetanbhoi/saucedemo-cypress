import { LOCATORS } from "./locators";

/**
 * It will select the sorting option from the drop downs
 * @param {*} option pass the option name as [az, za, hilo, lohi]
 */
export const selectSortOption = (option) => {
    cy.get(LOCATORS.inventory.productSortDropDown).select(option);
};

/**
 * It will get the list of the all itemes name
 * @returns list of the item name
 */
export const getProductNames = () => {
    return cy.get(LOCATORS.inventory.itemNames).then($items => {
        return $items.map((i, el) => Cypress.$(el).text().trim()).get();
    });
};

/**
 * It will get the list of the all items prices
 * @returns list of the item price
 */
export const getProductPrices = () => {
    return cy.get(LOCATORS.inventory.itemPrices).then($items => {
        return $items.map((i, el) => parseFloat(Cypress.$(el).text().trim().replace('$', ''))).get();
    });
};

/**
 * Loop the list of prices and log
 * @param {*} prices 
 * @param {*} label 
 */
export const logPrices = (prices, label = "Price list") => {
    cy.log(label);
    prices.forEach(price => {
        cy.log(price.toString());
    });
};
