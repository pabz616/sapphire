const { $ } = require('@wdio/globals')
const Page = require('../../page');

class CheckboxPage extends Page {

    //LOCATORS
    get page_title () {
        return $('//h3');
    }

    get checkbox1 () {
        return $('(//input[@type="checkbox"])[1]');
    }

    get checkbox2 () {
        return $('(//input[@type="checkbox"])[2]');
    }

    //FUNCTIONS
    async confirm_UI(){
        //CHECK UI
        await expect(this.page_title).toBeDisplayed()
        await expect(this.page_title).toHaveTextContaining('Checkboxes')
        //        
        await expect(this.checkbox1).toBeDisplayed()
        await expect(this.checkbox1).isFalse
        //
        await expect(this.checkbox2).toBeDisplayed()
        await expect(this.checkbox2).isTrue
    }
    async choose_option1 () {
        await this.checkbox1.click();
    }

    async choose_option2 () {
        await this.checkbox2.click();
    }

    open () {
        return super.open('checkboxes');
    }
};

module.exports = new CheckboxPage();
