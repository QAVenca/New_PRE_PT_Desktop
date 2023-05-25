const HomePage = require('../../pageobjects/home/home.page');
const Steps = require('../../pageobjects/steps');

describe('Image links comprovation', () => {
    it('Diferent links from all the home page should be present and function', async () => {
        await Steps.goToCategories();
        await HomePage.checkCategories();
    });

    it('\'Condiciones de venta y uso\' and \'Quienes somos\' should be present and function', async () => {
        await Steps.goToCategories();
        await HomePage.checkCategories();
        //await Steps.goHome();
        await HomePage.checkLinks();
    });
});