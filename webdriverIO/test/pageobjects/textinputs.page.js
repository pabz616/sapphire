const { $ } = require('@wdio/globals')
const Page = require('./page');

class TextInputPage extends Page {

    //LOCATORS
    get userName () {return $('(//input[@id="userName"])')}
    get userEmail () {return $('(//input[@id="userEmail"])')}
    get userCurrentAddress () {return $('(//textarea[@id="currentAddress"])')}
    get userPermanentAddress () {return $('(//textarea[@id="permanentAddress"])')}
    
    
    //FUNCTIONS
    async confirm_UI(){
        //CHECK UI
        //
        await expect(this.userName).toBeDisplayed()
        await expect(this.userEmail).toBeDisplayed()
        await expect(this.userCurrentAddress).toBeDisplayed()
        await expect(this.userPermanentAddress).toBeDisplayed()
    }

    async fill_form() {
        await this.userName.setValue('Loki Odinsson')
        await this.userEmail.setValue('loki@tva.com')
        await this.userCurrentAddress.setValue('101 Somewhere Street \n Valhalla')
        await this.userPermanentAddress.setValue('101 Somewhere Street \n Valhalla')

    }

};

module.exports = new TextInputPage();