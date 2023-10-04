const { expect } = require('@wdio/globals')

class PaymentMethodPage{
    //UI ELEMENTS
    get progress_bar_elem1 () {return $('#') }
    get progress_bar_elem2 () {return $('#') }
    get placeOrderButton () {return $('//button[contains(@class,"checkout")]')}

    //PAYMENT METHOD
    get sectionTitle () {return $('(//div[contains(@class,"step-title")])[1]') }
    get paymentOption() {return $('//span[contains(.,"Check / Money order")]')}
    get billingAsShippingToggle () {return $('//input[@name="billing-address-same-as-shipping"]')}
    get billingAsShippingLabel () {return $('//div[@class="billing-address-same-as-shipping-block field choice"]')}
    get billingAddressDetailsModule () {return $('//div[@class="billing-address-details"]')}

    //ORDER SUMMARY
    get orderSummaryModule () {return $('//div[@class="opc-block-summary"]') }

    //SHIPPING INFO
    get shipToModule () {return $('//div[@class="ship-to"]') }

    //SHIPPING METHOD
    get shipMethodModule () {return $('//div[@class="ship-via"]') }

    //DISCOUNT CODE
    get discountCodeToggle () {return $('#block-discount-heading')}
    get discountCodeInput () {return $('discount-code')}
    get discountCodeApplyButton () {return $('//button[contains(@class,"action-apply")]')}
    
    //TODO: Test UI
    //TODOO: Test Shipping Info Form Is Shown If Billing Info != Shipping Info
    
    async confirmPaymentMethod(){}

    async confirmOrderSummary(){}
    
    async confirmShippingInfo(){}

    async confirmShippingMethod(){}

    async applyDiscountCode(){}

    async placeOrder(){
        await expect(this.sectionTitle).toBeDisplayed()
        await expect(this.sectionTitle).toHaveText('Shipping Address')
        await expect(this.orderSummaryModule).toBeDisplayed()
        await expect(this.shipToModule).toBeDisplayed()
        await expect(this.shipMethodModule).toBeDisplayed()
        await expect(this.discountCodeToggle).toBeDisplayed()
        await expect(this.placeOrderButton).not.toBeDisabled();
        await this.placeOrderButton.click();
    }
}

module.exports = new PaymentMethodPage();