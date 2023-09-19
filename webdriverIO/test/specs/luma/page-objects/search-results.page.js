const { $ } = require('@wdio/globals')

class SearchResultsPage {

    //LOCATORS
    get result1 () {return $('(//img[@class="product-image-photo"])[1]') }

    //FUNCTIONS
    async selectFirstItem(){
        await expect(this.result1).toBeDisplayed(); 
        await this.result1.click()
    }

}

module.exports = new SearchResultsPage();