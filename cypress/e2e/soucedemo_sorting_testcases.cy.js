import { login, verifyLogoText } from "../actions/authActions"
import {getProductNames, selectSortOption, getProductPrices } from "../actions/sortActions"
import { isSortedAsc, isSortedDesc, sortNumberInAscending, sortNumberInDescending } from "../utils/sortingHelpers";

 
describe("Sorting Functionality", () =>{
    beforeEach(() => {
        login("standard_user", "secret_sauce")
        verifyLogoText()
      });

    it("Verify sorting by Name - A to Z", ()=>{
        selectSortOption("az")
        getProductNames().then(items => {
            cy.log("items:", items);
            expect(isSortedAsc(items)).to.be.true;
        });
    })

    it("Verify sorting by Name - Z to A", ()=>{
        selectSortOption('za')
        getProductNames().then(items => {
            cy.log("items:", items);
            expect(isSortedDesc(items)).to.be.true;
        });
    })

    it("Verify sorting by Price - High to Low", ()=>{
        selectSortOption('hilo')
        getProductPrices().then(items => {
            expect(items).to.deep.equal(sortNumberInDescending(items));
        })
    })

    it("Verify sorting by Price - Low to High", ()=>{
        selectSortOption('lohi')
        getProductPrices().then(items => {
            expect(items).to.deep.equal(sortNumberInAscending(items));
        })
    })
})