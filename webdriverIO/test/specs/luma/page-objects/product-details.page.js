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
    //TODO: Test Product Info Module - View Product Details
    //TODO: Test Product Info Module - Get More Information
    //TODO: Test Product Info Module - Read Reviews
    //TODO: Test Related Products Module - Verify UI
    //TODO: Test Update Item
    //TODO: Test Update Item - Blank Quantity
    //TODO: Test Update Item - High Quantity
    //TODO: Test Update Item - Pasting A Value Not Possible
    
    //TODO: Test Update Item - Non-Numeric Input
    //TODO: Test Add To Whish List
    //TODO: Test Add To Product Comparison

    //FUNCTIONS
    async addItemToCart() {
        var item = 'Chloe Compete Tank'
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