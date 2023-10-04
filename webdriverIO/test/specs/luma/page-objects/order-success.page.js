const { $ } = require('@wdio/globals')

class OrderSuccessPage{
    //TEST DATA
    confirmationMsgCopy = 'Thank you for your purchase!'
    improperOrderNumber = '000000000'
    orderInstructionsCopy = "We'll email you an order confirmation with details and tracking info."
    orderTrackingCopy = "You can track your order status by creating an account."
    orderLabelCopy= "Your order # is:"
    
    //LOCATORS
    get confirmationMsg () {return $('//span[@data-ui-id="page-title-wrapper"]') }
    // confirmationCopy = (this.confirmationMsg).getText()
    customerEmailLabelCopy = "Email Address:"

    get orderNumberLabel () {return $('//p[contains(.,"Your order")]') }
    get orderNumber () {return $('//p[contains(.,"Your order")]/span') }
    get orderInstructions () {return $('//p[contains(.,"order confirmation")]') }
    get continueShoppingButton () {return $('//a[contains(@class, "action primary continue")]') }
    get orderTrackingMsg () {return $('//p[contains(.,"You can track your order")]') }
    get customerEmailLabel() {return $('//p[contains(.,"Email Address")]') }
    get customerEmail() {return $('//p[contains(.,"Email Address")]/span[2]') }
    get createAccountButton() {return $('(//a[contains(@class, "action primary")])[2]') }

    //FUNCTIONS
     async confirmOrderIsPlaced(){
        await expect(this.confirmationMsg).toBeDisplayed() 
        // await expect(this.confirmationCopy).toHaveText(confirmationMsgCopy)
        await expect(this.orderNumberLabel).toBeDisplayed()
        await expect(this.orderNumberLabel).toHaveText(orderNumberLabelCopy)
        await expect(this.orderNumber).toBeDisplayed()
        await expect(this.orderNumber).not.toHaveText(improperOrderNumber)
        await expect(this.orderInstructions).toBeDisplayed()
        await expect(this.orderInstructions).toHaveText(orderInstructionsCopy)
        await expect(this.continueShoppingButton).toBeDisplayed()
        await expect(this.continueShoppingButton).not.toBeDisabled()
        await expect(this.orderTrackingMsg).toBeDisplayed()
        await expect(this.orderTrackingMsg).toHaveText(orderTrackingCopy)
        await expect(this.customerEmailLabel).toBeDisplayed()
        await expect(this.customerEmailLabel).toHaveText(this.customerEmailLabelCopy)
        await expect(this.customerEmail).toBeDisplayed()
        await expect(this.customerEmail).not.toHaveText('admin@luma.com')
        await expect(this.createAccountButton).toBeDisplayed()
        await expect(this.createAccountButton).not.toBeDisabled()
     }

    async continueShopping(){
        await this.continueShoppingButton.click()
    }

     //TODO Test Navigate Back After Order Is Placed == Cart Is Empty
}
module.exports = new OrderSuccessPage();