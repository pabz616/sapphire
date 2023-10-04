const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();
