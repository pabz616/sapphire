const { $ } = require('@wdio/globals')
const { Key } = require ('webdriverio')


class HomePage {

    //LOCATORS
    get logo () {return $('//img[contains(@src,"logo.svg")]') }
    get search_input(){return $('#search') }


    //FUNCTIONS
    async confirmLogoIsVisible(){
        await expect(this.logo).toBeDisplayed()
    }

    async confirmLogoIsActionable(){
        await expect(this.logo).not.toBeDisabled()
    }
    

    //TODO: Write tests for Welcome Module

    //TODO: Write tests for Search Module
    async searchForItem(term){
        await expect(this.search_input).toBeDisplayed()
        await this.search_input.setValue(term)
        await browser.keys([Key.Enter])
    }

    //TODO: Search by color
    //TODO: Search by SKU#
    //TODO: Search by Brand
    //TODO: Search for invalid items
    //TODO: Test input boundaries
    //TODO: Test input validation
    //TODO: Test for security vulnerabilities

    //TODO: Write tests for Navigation Module
    //TODO: Write tests for "Flyer" Module
    //TODO: Write tests for "Hot Sellers" Module
    //TODO: Write tests for Footer Module

};

module.exports = new HomePage();