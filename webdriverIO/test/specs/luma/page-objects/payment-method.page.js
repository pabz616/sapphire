const { expect } = require('@wdio/globals')

class PaymentMethodPage{
    //UI ELEMENTS
    get progress_bar_elem1 () {return $('#') }
    get progress_bar_elem2 () {return $('#') }
    get placeOrderButton () {return $('//button[contains(@class,"checkout")]')}

    //PAYMENT METHOD
    get elem () {return $('#customer-email') }

    //ORDER SUMMARY
    get elem () {return $('#customer-email') }

    //SHIPPING INFO
    get elem () {return $('#customer-email') }

    //SHIPPING METHOD
    get elem () {return $('#customer-email') }
    
    //TODO: Test UI
    //TODOO: Test Shipping Info Form Is Shown If Billing Info != Shipping Info
    
    async confirmPaymentMethod(){}

    async confirmOrderSummary(){}
    
    async confirmShippingInfo(){}

    async confirmShippingMethod(){}

    async applyDiscountCode(){}

    async placeOrder(){
        await expect(this.placeOrderButton).not.toBeDisabled();
        await this.placeOrderButton.click();
    }
}

module.exports = new PaymentMethodPage();