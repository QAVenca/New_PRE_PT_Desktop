const Page = require('../page');
const selectors = require('./selectors');
const homeSelectors = require('../home/selectors')

class Login extends Page {

    async login (username, password) {
        await $(selectors.inputUsername).waitForEnabled();
        await $(selectors.inputUsername).setValue(username);
        await $(selectors.inputPassword).waitForEnabled();
        await $(selectors.inputPassword).setValue(password);
        await $(selectors.btnSubmit).waitForClickable();
        await $(selectors.btnSubmit).click();
        await browser.pause(20000);
    }

    async Logout() {
        await $(homeSelectors.loginIcon).click();
        await $(homeSelectors.logoutButton).click();
    }

    openLoginPage() {
        return super.openHomePage('login');
    }


}

module.exports = new Login();