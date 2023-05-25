const Page = require('../page');
const Selector = require('./selectors');
const Steps = require('../steps');

class Storefront extends Page {

    async scrollToNextPage() {
        await $(Selector.next).scrollIntoView();
        await browser.pause(1500);
        await Steps.closeNewsletter();
    }

    async buttons() {
        await $(Selector.next).waitForClickable();
        await $(Selector.next).click();
        await browser.pause(3000);
        await $(Selector.prev).waitForClickable();
        await $(Selector.prev).click();
    }

    async chicksizePage() {
        await this.open();
        await Steps.closeCookies();
        await $(Selector.chicksize).moveTo();
        await browser.pause(3000);
        await $(Selector.chicksize).click();
    }

    async sortByVenca() {
        await $(Selector.onlyVencaCheckBox).click();
    }
    
    open() {
        return super.openHomePage('home');
    }
    
}

module.exports = new Storefront();