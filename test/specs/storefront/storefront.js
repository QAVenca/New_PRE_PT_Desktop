const storefront = require('../../pageobjects/storefront/storefront.page');
const selectors = require('../../pageobjects/storefront/selectors')

describe('Storefront Activity', () => {
    it('Storefront shows a title and description', async () => {
        await storefront.storefrontPage();
        await $(selectors.title).waitForClickable();
        await expect($(selectors.title)).toHaveTextContaining('ROUPA ONLINE DE MULHER');
    });

    it('Buttons \'Anterior\' and \'Siguiente\' should go to before/next storefront page', async () => {
        await storefront.storefrontPage();
        await storefront.scrollToNextPage();
        await storefront.buttons();
        await expect($(selectors.next)).toBeClickable();
    });
    
    it('Links on header storefront should go to a correct page', async () =>{
        await storefront.storefrontPage();
        await $(selectors.dressLink).click();
        await expect($(selectors.dressStorefront)).toHaveTextContaining('CAMISAS E BLUSAS MULHER');
    });
});