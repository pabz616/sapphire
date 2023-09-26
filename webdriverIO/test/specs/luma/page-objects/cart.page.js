const { $ } = require('@wdio/globals')

class ShoppingCartPage{
    //LOCATORS
    get proceedToCheckoutButton () {return $('//button[@data-role="proceed-to-checkout"]') }
    
    //FUNCTIONS
    //TODO: Test UI
    //TODO: Test Update Item Quantity
    //TODO: Test Delete Item

    //TODO: Test Edit Quantity - empty number of items
    //TODO: Test Edit Quantity - high number of items
    //TODO: Test Edit Quantity - negative number of items
    //TODO: Test Edit Quantity - non-numeric input
    //TODO: Test Edit Quantity - sql injection
    //TODO: Test Edit Quantity - js injection
   
    //TODO: Test Apply Discount code
    //TODO: Test Apply Discount code - boundary test
    //TODO: Test Edit Quantity - sql injection
    //TODO: Test Edit Quantity - js injection

    //TODO: Test More Choices Section 


    async proceedToCheckout() {
        await expect(this.proceedToCheckoutButton).toBeDisplayed()
        await this.proceedToCheckoutButton.click()
    }
}
module.exports = new ShoppingCartPage();