const selectorCookies = require('./cookies/selectors');
const selectorNews = require('./newsletter/selectors');
const selectorHome = require('./home/selectors');
const login = require('./login/login.page');
const selectorAccount = require('./account/selectors');
const Page = require('./page');
const Data = require('./data');
let cookies_check = false;
let news_check = false;
let login_check = false;

class Steps extends Page {

    async closeCookies() {
        await browser.pause(1500);
        let cookies = await $(selectorCookies.cookieID).isExisting();
        if(cookies == true){
            await $(selectorCookies.cookieID).waitForDisplayed();
            await $(selectorCookies.cookieID).click();
            cookies_check = true;
        }
    }

    async closeNewsletter(){
        await browser.pause(1500);
        let exists = await $(selectorNews.modalClose).isExisting();     
        if(exists == true) {
            await $(selectorNews.modalClose).waitForClickable();
            await $(selectorNews.modalClose).click();
        }
    }

    async goHome() {
        await this.openHomePage('home');
        await browser.pause(1500);
        await this.closeCookies();
        await browser.pause(1500);
    }

    async goToMyAccount() {
        await this.openHomePage('home');
        //await browser.pause(5000);
        await this.closeCookies();
        await browser.pause(1500);
        if(login_check == false) {
            await $(selectorHome.loginIcon).click();
            await login.login(Data.customer.email, Data.customer.currentPassword);
            await $(selectorHome.loginIcon).click();
            await $(selectorAccount.myAccount).click();
            login_check = true;
            await browser.pause(3000);
            //await expect(selectorAccount.myDataPanel).toBeDisplayedInViewport();
        } else if(login_check == true) { 
            await $(selectorHome.loginIcon).click();
            await $(selectorAccount.myAccount).click();
            //await expect(selectorAccount.myDataPanel).toBeDisplayedInViewport();
        }
    }

    async goToLanguageButton() {
        await this.openHomePage('home');
        await this.closeCookies();
        await $(selectorHome.languageChoice).scrollIntoView();
        await this.closeNewsletter();
        await $(selectorHome.languageChoice).scrollIntoView();
    }

    async goToCategories() {
        await this.openHomePage('home');
        await this.closeCookies();
        await browser.pause(3000);
        await $(selectorHome.categoryOne).scrollIntoView();
        await this.closeNewsletter();
        await $(selectorHome.loginIcon).scrollIntoView();
    }

    async manageIFrame() {
        
    }

    openHomePage() {
        return super.openHomePage('home');
    }

    async login() {
        await this.openHomePage('home');
        await this.closeCookies();
        await browser.pause(3000);
        if(login_check == false) {
            await this.waitAndClick($(selectorHome.loginIcon));
            await login.login(Data.customer.email, Data.customer.currentPassword);
            login_check = true;
        }
    }

    async scrollToElement(element) {
        element.scrollIntoView();
    }

    async waitAndClick(element) {
        element.waitForClickable();
        element.click();
    }
}

module.exports = new Steps();