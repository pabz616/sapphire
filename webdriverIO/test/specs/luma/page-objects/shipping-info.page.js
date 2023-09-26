const { $ } = require('@wdio/globals')

class ShippingInfoPage{
    //UI ELEMENTS
    get progress_bar_elem1 () {return $('#') }
    get progress_bar_elem2 () {return $('#') }
    get signInButton () {return $('//button[contains(@class,"action-auth-toggle")]') }
    get nextButton () {return $('//button[contains(@class,"action continue")]') }

    //SHIPPING ADDRESS FORM
    get emailInput () {return $('#customer-email') }
    get passwordInput () {return $('#customer-password')}
    get firstNameInput () {return $('//input[@name="firstname"]') }
    get lastNameInput () {return $('//input[@name="lastname"]') }
    get companyInput () {return $('//input[@name="company"]') }
    get streetAddressInput1 () {return $('//input[@name="street[0]"]') }
    get streetAddressInput2 () {return $('//input[@name="street[1]"]') }
    get streetAddressInput3 () {return $('//input[@name="street[2]"]') }
    get cityInput () {return $('//input[@name="city"]') }
    
    get stateList () {return $('//select[@name="region_id"]') }
    selectUSstate (state) {return $(`//option[@data-title="${state}"]`)}
    
    get zipcodeInput () {return $('//input[@name="postcode"]') }
    
    get countryList () {return $('//select[@name="country_id"]') }
    selectCountry (country) {return $(`//option[@data-title="${country}"]`)}
    
    get phoneNumberInput () {return $('//input[@name="telephone"]') }

    //SHIPPING METHOD - FLAT RATE
    get flatRateOption () {return $('//input[@name="ko_unique_1"]') }
    get flatRatePrice () {return $('(//td[contains(@class,"col-price")])[1]') }
    get flatRateTerm () {return $('(//td[contains(@class,"col-method")])[2]') }
    get flatRateDescription () {return $('(//td[contains(@class,"col-carrier")])[1]') }

    

    //SHIPPING METHOD -  BEST WAY
    get bestWayOption () {return $('//input[@name="ko_unique_2"]') }
    get bestWayPrice () {return $('(//td[contains(@class,"col-price")])[2]') }
    get bestWayTerm () {return $('(//td[contains(@class,"col-method")])[4]') }
    get bestWayDescription () {return $('(//td[contains(@class,"col-carrier")])[2]') }

    //ORDER SUMMARY
    get orderSummaryTitle () {return $('//span[contains(@class,"title")]') }
    get orderSummaryItems () {return $('//div[contains(@class,"items-in-cart")]') }
    get orderSummaryItemAdded () {return $('//div[contains(@class,"minicart-items-wrapper")]/ol')}

    //FUNCTIONS
    //TODO: Test UI
    //TODO: Test Sign-In
    //TODO: Test Required input Validation
    //TODO: Test Password input shown if account exists
    //TODO: Test Improper email
    //TODO: Test Non-Numeric Zip Code
    //TODO: Test Non-Alphabetic city
    //TODO: Test Boundary input
    //TODO: Test Form w. curse words (?)
    //TODO: Test Foreign country - allowed list
    //TODO: Test Foreign country - blocked list

    async confirmOrderSummary(){
        await expect(this.orderSummaryTitle).toBeDisplayed();
        await this.orderSummaryItems.click();
        await expect(this.orderSummaryItemAdded).toBeDisplayed();
    }

    async enterShippingInfo(){
        //ENTER EMAIL ADDRESS
        await this.emailInput.addValue("qa247@mail.com") //todo: randomize this

        //ENTER PERSONAL INFORMATION
        await this.firstNameInput.addValue("qa247")
        await this.lastNameInput.addValue("testing")
        await this.companyInput.addValue("QA As Service")
        await this.streetAddressInput1.addValue("247 Tester Way")
        await this.cityInput.addValue("Miami")
        await this.stateList.click()
        await this.selectUSstate("Florida")
        await this.zipcodeInput.addValue(33177) //todo: randomize this with valid zipcode
        //SKIP SINCE COUNTRY "UNITED STATES" IS SELECTED BY DEFAULT
        // await this.countryList.click()
        // await this.selectCountry("United States")
        await this.phoneNumberInput.addValue(2123334455) //todo: randomize this w. valid phone number
    }

    async selectFlatRateShippingMethod(){
        await expect(this.flatRateOption).not.toBeSelected()
        await this.flatRateOption.click()
    }

    async selectBestWayShippingMethod(){
        await expect(this.bestWayOption).not.toBeSelected()
        await this.bestWayOption.click()
    }

    async continueToPaymentMethod(){
        await expect(this.nextButton).not.toBeDisabled()
        await this.nextButton.click()
    }

}

module.exports = new ShippingInfoPage();