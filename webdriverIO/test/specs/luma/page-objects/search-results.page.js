const { $ } = require('@wdio/globals')

class SearchResultsPage {

    //LOCATORS
    get result1 () {return $('(//img[@class="product-image-photo"])[1]') }

    //FUNCTIONS
    async selectFirstItem(){
        await expect(this.result1).toBeDisplayed(); 
        await this.result1.click()
    }

    //TODO: Test UI
    //TODO: Test UI for item not found

}

module.exports = new SearchResultsPage();