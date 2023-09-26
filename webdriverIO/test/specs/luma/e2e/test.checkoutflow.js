const { expect } = require('@wdio/globals')

//PAGES
const onHomePage = require('../page-objects/home.page.js')
const onSearchResultsPage = require('../page-objects/search-results.page.js')
const onProductListPage = require('../page-objects/product-list.page.js')
const onProductDetailsPage = require('../page-objects/product-details.page.js')
const onShoppingCartPage = require('../page-objects/cart.page.js')
const onShippingInfoPage = require('../page-objects/shipping-info.page.js')
const onPaymentMethodPage = require('../page-objects/payment-method.page.js')
const onOrderSuccessPage = require('../page-objects/order-success.page.js')

describe('E2E CHECKOUT FLOW', () => {
    beforeEach(() => {
        browser.url('https://magento.softwaretestingboard.com/')

    });
    it.only('Purchase Item As Guest Customer', async () => {
        await onHomePage.searchForItem('tshirts for men')
        await onSearchResultsPage.selectFirstItem()
        await onProductDetailsPage.addItemToCart()
        //AFTER ITEM IS SELECTED
        await onProductDetailsPage.navigateToShoppingCart()
        await onShoppingCartPage.proceedToCheckout()
        await onShippingInfoPage.confirmOrderSummary()
        await onShippingInfoPage.enterShippingInfo()
        await onShippingInfoPage.selectFlatRateShippingMethod()
        await onShippingInfoPage.continueToPaymentMethod()
        await onPaymentMethodPage.confirmPaymentMethod()
        await onPaymentMethodPage.confirmOrderSummary()
        await onPaymentMethodPage.confirmShippingInfo()
        await onPaymentMethodPage.confirmShippingMethod()
        await onPaymentMethodPage.placeOrder()
        await onOrderSuccessPage.confirmOrderIsPlaced()
        await onOrderSuccessPage.continueShopping()
    })

    it('Purchase Item After Clicking Ad', async () => {
        //TODO - Add Test, click image and proceed through flow
    })

    it('Purchase Item As Return Customer', async () => {
        //TODO - Add Test, include login
    })

    it('Purchase Item From Featured Section', async () => {
        //TODO - Add Test from "What's New" section
    })

    it('Purchase Item From BEST SELLER Section', async () => {
        //TODO - Add Test from "Best Sellers" section
    })

    it('Purchase Item From WOMEN Section', async () => {
        //TODO - Add Test from "Women's" section
    })

    it('Purchase Item From MEN Section', async () => {
        //TODO - Add Test from "Men's" section
    })

    it('Purchase Item From GEAR Section', async () => {
        //TODO - Add Test from "Gear" section
    })

    it('Purchase Item From TRAINING Section', async () => {
        //TODO - Add Test from "Training" section
    })

    it('Purchase Item From SALEs Section', async () => {
        //TODO - Add Test from "Training" section
    })
});