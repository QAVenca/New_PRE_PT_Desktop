const Page = require('../../pageobjects/page');
const SelectorCookies = require('./selectors');
const Steps = require('../../pageobjects/steps');

class Cookies extends Page {

    async checkCookies() {
        await Steps.openHomePage('home');
        await browser.pause(3000);
        await expect($(SelectorCookies.cookieID)).toBePresent;
        await browser.pause(3000);
        await this.closeCookies($(SelectorCookies.cookieID));
    }

    async closeCookies(cookie) {
        await cookie.click();
    }
    
}

module.exports = new Cookies();