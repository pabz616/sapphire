const { expect } = require('@wdio/globals')

class OrderSuccessPage{
    //LOCATORS
    get elem () {return $('#') }

    //FUNCTIONS
     async confirmOrderIsPlaced(){}
}
module.exports = new OrderSuccessPage();