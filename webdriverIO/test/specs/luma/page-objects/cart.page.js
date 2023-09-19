const { $ } = require('@wdio/globals')

class ShoppingCartPage{
    //LOCATORS
    get proceedToCheckoutButton () {return $('//button[@data-role="proceed-to-checkout"]') }
    
    //FUNCTIONS
    async proceedToCheckout() {
        await expect(this.proceedToCheckoutButton).toBeDisplayed()
        await this.proceedToCheckoutButton.click()
    }
}
module.exports = new ShoppingCartPage();