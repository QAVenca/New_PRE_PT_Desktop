const product = require('../../pageobjects/product/product.page');

describe('PDP activity', () => {
    it('\'Add to cart\' button should be present and clickable', async () => {
        await product.productPage();
        await product.checkAddButton();
    });
    it('Discount price have a red color', async () => {
        await product.productPage();
    });
    it('Picture, color, price, size list and wishlist icon should be displayed', async () => {
        await product.productPage();
        await product.checkProperties();
    });
    it('should select \'L\' size', async () => {
        await product.productPage();
        await product.setSize();
    });
    it('Sections \'Productos similares\', \'Completa tu look\' and \' Quizás también te guste\' shold be displayed', async () => {
        await product.productPage();
        await product.checkSections();
    });
});