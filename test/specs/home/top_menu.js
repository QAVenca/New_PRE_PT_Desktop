const HomePage = require('../../pageobjects/home/home.page');
const Steps = require('../../pageobjects/steps');

describe('Top menu comprovation', () => {
    it('LOGIN, FAVORITOS, MI CESTA buttons should be present', async () => {
        await Steps.goHome();
        await HomePage.checkTopIcons();
    });

    it('LOGIN button should go to login page', async () => {
        await Steps.goHome();
        await HomePage.checkLoginIcon();
    });

    it.skip('NEW button should go to new page', async () => {
        await Steps.goHome();
        await HomePage.checkNewIcon();
    });

    it('FAVORITOS button should go to Favoritos page', async () => {
        await Steps.goHome();
        await HomePage.checkFavoritesIcon();
    });

    it.skip('AYUDA button should go to Ayuda page', async () => {
        await Steps.goHome();
        await HomePage.checkHelpIcon();
    });

    it('CARRITO button should go to Cart page', async () => {
        await Steps.goHome();
        await HomePage.checkCartIcon();
    });
    
    it.skip('\'Comprar desde un catálog impreso\' button should go to \'Comprar desde un catálogo impreso\' page', async () => {
        await Steps.goHome();
        await HomePage.checkBuyFromPrintedCatalogue();
    });
});