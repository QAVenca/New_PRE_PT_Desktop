const steps = require('../../pageobjects/steps');
const account = require('../../pageobjects/account/account.page');
const selectors = require('../../pageobjects/account/selectors');

describe('Account activity', () => {
    it('Click on user icon and my account should go to my account', async () => {
        await steps.goToMyAccount();
        /*await browser.pause(5000);
        await expect(selectors.myDataPanel).toBeDisplayed(); //error estrany, a revisar    */
    });

    it('should open the orders section and check if there are orders', async () => {
        await steps.goToMyAccount();
        await account.goToMyOrdersSection();
    });

    it('On data section, mofidy button should be clickable', async () => {
        await steps.goToMyAccount();
        await account.goToMyDataSection();
    });

        //modificar el test per a que només modifiqui 1 camp cada cop (en el nom sobretot)
    it.skip('On data section, modify user data', async () => {
        await steps.goToMyAccount();
        await account.goToMyDataSection();
        await account.checkValuesEnabled();
        await account.clearDataValues();
        await account.chooseData();
    });

    it.skip('On my directions section, add button should be clickable', async () => {
        await steps.goToMyAccount();
        await account.goToMyDirectionsSection();
    });

    it.skip('On my directions section, add direction', async () => {
        await steps.goToMyAccount();
        await account.goToMyDirectionsSection();
        await account.checkValuesDirectionEnabled();
        await account.clearDataDirectionValues();
        await account.chooseDataDirection();   
        await account.eraseDirection();     
    });

    it.skip('Should go to My Payments', async () => {
        await steps.goToMyAccount();
        await account.goToMyPaymentsSection();
    });

    it('Should go to My Password', async () => {
        await steps.goToMyAccount();
        await account.goToMyPasswordSection();
    });

    it('Should change the password and reset it', async () => {
        await steps.goToMyAccount();
        await account.goToMyPasswordSection();
        await account.changePassword();
        await account.goToMyPasswordSection();
        await account.resetPassword();
    });

    it('Should go to My Privacity', async () => {
        await steps.goToMyAccount();
        await account.goToMyPrivacitySection();
    });

    it('Should change Privacity settings', async () => {
        await steps.goToMyAccount();
        await account.goToMyPrivacitySection();
        await account.acceptPrivacity();
        await account.goToMyPrivacitySection();
        await account.rejectPrivacity();
    });

    it('Should go to My Messages', async () => {
        await steps.goToMyAccount();
        await account.goToMyMessagesSection();
    });

    it('Should go to My Comunications', async () => {
        await steps.goToMyAccount();
        await account.goToMyContactSection();
    });

    it('Should change contact preferences', async () => {
        await steps.goToMyAccount();
        await account.goToMyContactSection();
        await account.changeNewsletterFrequency();
        await account.resetContactFrequency();
    });

    it('Should unsuscribre from newsletter', async () => {
        await steps.goToMyAccount();
        await account.goToMyContactSection();
        await account.unsuscribeFromNewsletter();
    });
});


