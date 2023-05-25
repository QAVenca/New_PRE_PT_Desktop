const Selector = require('./selectors');

class PrintedCatalog {

    async checkPrintedCatalog() {
        await expect($(Selector.printedCatalogButton)).toBePresent();
    }

    async goToPrintedCatalog() {
        await $(Selector.printedCatalogButton).click();
        await expect($(Selector.searchProductButton)).toBePresent();
    }

    async searchProduct() {
        await $(Selector.searchInputField).setValue('50.00.73.10');
        await $(Selector.searchProductButton).click();
        await browser.pause(20000);
        await expect($(Selector.resultTitle)).toHaveTextContaining('Top liso mulher alças finas em malha extensível')
    }

    async modifyData() {
        await browser.pause(1000);
        await $(Selector.colorDropdown).click();
        await $(Selector.colorOption).click();
        await $(Selector.sizeDropdown).click();
        await $(Selector.sizeOption).click();
        await browser.pause(1000);
    }

    async addToCart() {
        await $(Selector.addToCart).click();
        await browser.pause(15000);
        await expect($(Selector.searchInputField)).toHaveTextContaining('');
    }
}

module.exports = new PrintedCatalog();