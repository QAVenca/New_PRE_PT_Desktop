const Page = require('../page');
const Steps = require('../steps');
const Selectors = require('./selectors');
let total_of_products = 0;

class Product extends Page {
    
    async productPage() {
        await this.open();
        await Steps.closeCookies();
    }

    async checkAddButton() {
        await $(Selectors.addButton).waitForClickable();
        await $(Selectors.addButton).scrollIntoView();
        await Steps.closeNewsletter();
        await $(Selectors.addButton).waitForClickable();
        await expect($(Selectors.addButton)).toBeClickable();
        await expect($(Selectors.addButton)).toBeDisplayed();
    }

    async setSize(){
        await $(Selectors.sizeList).scrollIntoView();
        await Steps.closeNewsletter();
        await $(Selectors.sizeList).waitForClickable();
        await $(Selectors.sizeList).click();
        browser.waitUntil( async ()=> await $(Selectors.size).isClickable());
        await browser.pause(1000);
        await $(Selectors.size).click();
        await expect($(Selectors.sizeList)).toHaveTextContaining('L');
    }

    async checkProperties() {
        await $(Selectors.color).waitForDisplayed();
        await $(Selectors.price).waitForDisplayed();
        await $(Selectors.picture).waitForDisplayed();
        await $(Selectors.sizeList).waitForDisplayed();
        await $(Selectors.wishlist).waitForDisplayed();
    }

    async checkSections() {
        await browser.pause(1500);
        await $(Selectors.similar_products).scrollIntoView({ block: 'center', inline: 'center' });
        await Steps.closeNewsletter();
        await $(Selectors.similar_products).waitForDisplayed();
        await expect($(Selectors.similar_products)).toBeDisplayed();
        await browser.pause(1500);

        let ourCarrousel = await $(Selectors.completeYourLook).isExisting();
        let syteCarrousel = await $(Selectors.completeYourLook2).isExisting();
        if (ourCarrousel === true) {
            await $(Selectors.completeYourLook).scrollIntoView();
            await $(Selectors.personalization_products).scrollIntoView({ block: 'center', inline: 'center' });
            await $(Selectors.personalization_products).waitForDisplayed();
            await expect($(Selectors.completeYourLook)).toBeDisplayed();
        }  else if (syteCarrousel === true) {
            await $(Selectors.completeYourLook2).scrollIntoView();
            await $(Selectors.personalization_products2).scrollIntoView({ block: 'center', inline: 'center' });
            await $(Selectors.personalization_products2).waitForDisplayed();
            await expect($(Selectors.completeYourLook2)).toBeDisplayed();
        }
        await browser.pause(1500);
        await $(Selectors.you_may_like).scrollIntoView({ block: 'center', inline: 'nearest' });
        await $(Selectors.you_may_like).waitForDisplayed();
        await expect($(Selectors.you_may_like)).toBeDisplayed();
    }
    
    open() {
        return super.openHomePage('p/117003/');
    }

    openProductWithDiscount() {
        return super.openHomePage('p/059586/');
    }
}

module.exports = new Product();