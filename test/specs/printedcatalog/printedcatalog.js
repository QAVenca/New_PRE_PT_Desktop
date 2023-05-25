const Steps = require('../../pageobjects/steps');
const PrintedCatalog = require('../../pageobjects/printedcatalog/printed.page');

describe('Buy from printed catalog', () => {
    it('Should check if exists the printed catalog option', async () => {
        await Steps.goHome();
        await PrintedCatalog.checkPrintedCatalog();
    });

    it('Should go to the printed catalog', async () => {
        await Steps.goHome();
        await PrintedCatalog.goToPrintedCatalog();
    });

    it('Should search an item with a reference from the printed catalog', async () => {
        await Steps.goHome();
        await PrintedCatalog.goToPrintedCatalog();
        await PrintedCatalog.searchProduct();
    });

    it('Should be able to change color, size & number of items and add it to cart', async () => {
        await Steps.goHome();
        await PrintedCatalog.goToPrintedCatalog();
        await PrintedCatalog.searchProduct();
        await PrintedCatalog.modifyData();
        await PrintedCatalog.addToCart();
    });
});