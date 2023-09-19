const { expect } = require('@wdio/globals')

//PAGES
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const CheckboxesPage = require('../pageobjects/checkboxes.page')
const DropdownListPage = require('../pageobjects/dropdownlist.page')
const NumberPickerPage = require('../pageobjects/numberpicker.page')
const TextInputPage = require('../pageobjects/textinputs.page')

//TESTING THE INTERNET HEROKU APPLICATION
describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

describe('Checkboxes on the page', () =>{
    it('should check one of the options presented and verify result', async () =>{
        await CheckboxesPage.open()
        await CheckboxesPage.confirm_UI()
        
        await CheckboxesPage.choose_option1
        await expect(CheckboxesPage.checkbox1).isTrue
        
        await CheckboxesPage.choose_option2
        await expect(CheckboxesPage.checkbox2).isFalse
    })
})

describe('Dropdowns on the page', () =>{
    it('should allow user to select a value', async() =>{
        await DropdownListPage.open()
        await DropdownListPage.confirm_UI()
        await DropdownListPage.select_item1()
        await expect(DropdownListPage.dropdownList).toHaveTextContaining('Option 1')

        await DropdownListPage.select_item2()
        await expect(DropdownListPage.dropdownList).toHaveTextContaining('Option 2')

    })
})

describe('Number picker on the page', () => {
    it('should allow user to selelct a number or type one', async() =>{
        await NumberPickerPage.open()
        await NumberPickerPage.confirm_UI()
        
        //USER CAN SELECT A NUMBER
        await NumberPickerPage.pick_a_number()
        await expect(NumberPickerPage.numberpicker).toHaveValue('1')
        await NumberPickerPage.clear_input()
        
        //USER CAN TYPE A NUMBER
        await NumberPickerPage.enter_a_number()
        await expect(NumberPickerPage.numberpicker).toHaveValue('37')
        await NumberPickerPage.clear_input()

        //USER SHOULD NOT BE ABLE TO ENTER A NON-NUMERIC VALUE
        await NumberPickerPage.enter_an_improper_value()
        await expect(NumberPickerPage.numberpicker).not.toHaveValue('alpha')
    }) 
})

describe('Text input fields on the page', () => {
    it('should allow user to interact with different types of input fields', async() => {
        await browser.url('https://demoqa.com/text-box')
        await browser.pause(2000)
        await TextInputPage.confirm_UI()
        await TextInputPage.fill_form()
    })
})
