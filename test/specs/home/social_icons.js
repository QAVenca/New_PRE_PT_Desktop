const HomePage = require('../../pageobjects/home/home.page');
const Steps = require('../../pageobjects/steps');

describe('Social Icons interaction', () => {
    it('\'Descarga la APP\', \'Síguenos\' and \'eKomi\' sections should be present', async () => {
        await Steps.goToLanguageButton();
        await HomePage.checkSocialIcons();
    });

    it('\'Descarga la APP\' section should be functional', async () => {
        await Steps.goToLanguageButton();
        await HomePage.testAppIcons();
    });

    it('\'Síguenos\' section should be functional', async () => {
        await Steps.goToLanguageButton();
        await HomePage.testSocialIcons();
    });

    it('\'eKomi\' section should be functional', async () => {
        await Steps.goToLanguageButton();
        await HomePage.testEkomiFooter();
    });
});