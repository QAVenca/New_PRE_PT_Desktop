const Page = require('../page');
const storefront = require('./selectors');
const steps = require('../steps');

class Storefront extends Page {

    async scrollToNextPage() {
        await $(storefront.next).scrollIntoView();
        await steps.closeNewsletter();
    }

    async buttons() {
        await $(storefront.next).waitForClickable();
        await $(storefront.next).click();
        await browser.pause(3000);
        await $(storefront.prev).waitForClickable();
        await $(storefront.prev).click();
    }

    async storefrontPage() {
        await this.open();
        await steps.closeCookies();
        await browser.pause(3000);
        await $(storefront.storefront).click();
    }
    
    open() {
        return super.openHomePage('home');
    }
    
}

module.exports = new Storefront();