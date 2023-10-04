const { $ } = require('@wdio/globals')
const Page = require('./page');

class DropdownListPage extends Page {

    //LOCATORS
    get page_title () {return $('//h3')}
    get dropdownList () {return $('(//select[@id="dropdown"])')}
    get dropdownList_value1 () {return $('//option[@value="1"]')}
    get dropdownList_value2 () {return $('//option[@value="2"]')}

    //FUNCTIONS
    async confirm_UI(){
        //CHECK UI
        await expect(this.page_title).toBeDisplayed()
        await expect(this.page_title).toHaveTextContaining('Dropdown List')
        await expect(this.dropdownList).toBeDisplayed()
        await expect(this.dropdownList).toHaveTextContaining('Please select an option')
    }

    async select_item1() {
        await this.dropdownList.click()
        await this.dropdownList_value1.click()
    }

    async select_item2() {
        await this.dropdownList.click()
        await this.dropdownList_value2.click()
    }

    open () {
        return super.open('dropdown');
    }
};

module.exports = new DropdownListPage();

