const { $ } = require('@wdio/globals')

class ProductDetailsPage{
    //LOCATORS
    selectSize (itemSize) {return $(`//div[@option-tooltip-value="${itemSize}"]`)}
    selectColor (itemColor) {return $(`//div[@option-label="${itemColor}"]`)}
    get addToCartButton () {return $('//button[@id="product-addtocart-button"]') }

    get shoppingCartLink () {return $('//a[contains(.,"shopping cart")]')}

 
    //FUNCTIONS
    async addItemToCart() {
        await expect(this.addToCartButton).toBeDisplayed();
        await expect(this.addToCartButton).not.toBeDisabled();

        await this.selectSize('XS').click();
        await this.selectColor('Blue').click();
        await this.addToCartButton.click()
    }

    async navigateToShoppingCart(){
        await expect(this.shoppingCartLink).toBeDisplayed();
        await this.shoppingCartLink.click()
    }
}
module.exports = new ProductDetailsPage();