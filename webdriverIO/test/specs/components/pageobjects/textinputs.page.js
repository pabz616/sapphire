const { $ } = require('@wdio/globals')
const Page = require('./page');
const { Key } = require ('webdriverio')

class TextInputPage extends Page {

    //LOCATORS
    get userName () {return $('(//input[@id="userName"])')}
    get userEmail () {return $('(//input[@id="userEmail"])')}
    get userCurrentAddress () {return $('(//textarea[@id="currentAddress"])')}
    get userPermanentAddress () {return $('(//textarea[@id="permanentAddress"])')}
    get submitButton () {return $('//button[contains(@class,"btn-primary")]')}
    get submittedDataOutput () {return $('#output');}
    get inputError() {return $('//input[contains(@class,"field-error")]')}
    
    
    //FUNCTIONS
    async confirm_UI(){
        //CHECK UI
        //
        await expect(this.userName).toBeDisplayed()
        await expect(this.userEmail).toBeDisplayed()
        await expect(this.userCurrentAddress).toBeDisplayed()
        await expect(this.userPermanentAddress).toBeDisplayed()
        await expect(this.submitButton).toBeDisplayed()
    }

    async fill_form(name, email, address) {
        await this.userName.setValue(name)
        await this.userEmail.setValue(email)
        await this.userCurrentAddress.setValue(address)
        await this.userPermanentAddress.setValue(address)
        await browser.keys([Key.Tab])
        await browser.keys([Key.Enter])
        // await this.submitButton.click()
    }

};

module.exports = new TextInputPage();

