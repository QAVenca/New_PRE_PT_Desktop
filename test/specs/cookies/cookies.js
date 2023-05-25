const Cookies = require('../../pageobjects/cookies/cookies.page');

describe('Cookies interaction request', () => {
    it('Modal should be present', async () => {
        await Cookies.checkCookies();
    });
});