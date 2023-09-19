const { $ } = require('@wdio/globals')
const Page = require('./page');
const { Key } = require ('webdriverio')


class NumberPickerPage extends Page {

    //LOCATORS
    get page_title () {return $('//h3')}
    get page_subtitle () {return $('//p')}
    get numberpicker () {return $('(//input[@type="number"])')}

    //FUNCTIONS
    async confirm_UI(){
        //CHECK UI
        await expect(this.page_title).toBeDisplayed()
        await expect(this.page_title).toHaveTextContaining('Inputs')
        //
        await expect(this.page_subtitle).toBeDisplayed()
        await expect(this.page_subtitle).toHaveTextContaining('Number')

        await expect(this.numberpicker).toBeDisplayed()
        await expect(this.numberpicker).not.toHaveTextContaining('1')
    }

    async pick_a_number() {
        await this.numberpicker.click()
        await browser.keys([Key.ArrowUp])
    }

    async clear_input() {
        await this.numberpicker.clearValue()
    }


    async enter_a_number() {
        await this.numberpicker.setValue('37')
    }

    async enter_an_improper_value() {
        await this.numberpicker.setValue('alpha')
    }


    open () {
        return super.open('inputs');
    }
};

module.exports = new NumberPickerPage();