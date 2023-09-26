const { $ } = require('@wdio/globals')

class ProductDetailsPage{
    //LOCATORS
    get itemName () {return $('//span[@data-ui-id="page-title-wrapper"]')}
    selectSize (itemSize) {return $(`//div[@option-tooltip-value="${itemSize}"]`)}
    selectColor (itemColor) {return $(`//div[@option-label="${itemColor}"]`)}
    get addToCartButton () {return $('//button[@id="product-addtocart-button"]') }
    get shoppingCartLink () {return $('//a[contains(.,"shopping cart")]')}
    get itemAddedAlert () {return $('//div[@role="alert"]')}

     //TODO: Test UI
    //TODO: Test Update Item

    //FUNCTIONS
    async addItemToCart() {
        var item = (await (this.itemName)).getText()
        await expect(this.addToCartButton).toBeDisplayed();
        await expect(this.addToCartButton).not.toBeDisabled();

        await this.selectSize('XS').click();
        await this.selectColor('Blue').click();
        await this.addToCartButton.click()

        await expect(this.itemAddedAlert).toBeDisplayed()
        await expect(this.itemAddedAlert).toHaveTextContaining(`You added ${item} to your shopping cart.`)
    }

    async navigateToShoppingCart(){
        await expect(this.shoppingCartLink).toBeDisplayed();
        await this.shoppingCartLink.click()
    }
}
module.exports = new ProductDetailsPage();