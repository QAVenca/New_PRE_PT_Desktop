const Page = require('../../pageobjects/page');
const HomePage = require('../../pageobjects/home/home.page');
const Selector = require('../../pageobjects/searcher/selectors');
const clearSearchValue = '';

class Searcher extends Page {

    async search(item) {
        await browser.pause(5000);
        await HomePage.openSearcher(item);
        await expect($(Selector.searchInput)).toHaveValue(item);
    }

    async verifySuggestedItems() {
        await ($(Selector.suggestedItems)).waitForEnabled();
        await expect($(Selector.suggestedSearch)).toBeDisplayed();
    }

    async clear() {
        await HomePage.clearSearchTab(clearSearchValue);
        await browser.pause(3000);
        await expect($(Selector.searchInput)).toHaveValue(clearSearchValue);
    }

    async goToResultPage(item) {
        await expect($(Selector.searchInput)).toHaveValue(item);
        //await $(Selector.searchIcon).click();
        await browser.pause(10000);
        //await $(Selector.firstItemPageResult).toBeClickable();
        await expect($(Selector.firstItemPageResult)).toBeDisplayed();
    }

    async goToProduct() {
        await browser.pause(1000);
        await $(Selector.firstItemLink).waitForClickable();
        await $(Selector.firstItemLink).click();
        await browser.pause(1000);
        //await Selector.firstItemPageResult.scrollIntoView();
        await expect ($(Selector.checkProductPage)).toBeDisplayed();
    }

    async wrongSearch(item) {
        await HomePage.openSearcher(item);
        //await $(Selector.searchIcon).click();
        await browser.pause(1000);
        //await expect($(Selector.wrongSearchResult)).toHaveTextContaining(item.toUpperCase());
        await expect($(Selector.wrongSearchResult)).toHaveTextContaining('intente novamente com outra pesquisa');
    }
}

module.exports = new Searcher();