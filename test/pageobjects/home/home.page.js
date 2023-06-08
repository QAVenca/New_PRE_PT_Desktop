const Page = require('../../pageobjects/page');
const Selector = require('../../pageobjects/home/selectors');

class HomePage extends Page {

    async openSearchModal(){
        await $(Selector.searcher).click();
    }

    async openSearcher(searchValue){
        await $(Selector.searcher).click();
        await browser.pause(3000);
        await $(Selector.searchInput).addValue(searchValue);
    }

    async openSearcherClick(searchValue){
        /*await $(Selector.searcher).click();
        await $(Selector.searchInput).addValue(searchValue);
        await $(Selector.searchButton).click();*/
        await this.search(searchValue);
    }

    async clearSearchTab(clearSearchValue){
        /*await $(Selector.searchInput).clearValue();
        await browser.pause(3000);
        await $(Selector.searchInput).addValue(clearSearchValue);*/
        //await $(Selector.clearSearchButton).click();
        await $(Selector.closeSearcher).waitForClickable();
        await $(Selector.closeSearcher).click();
        await $(Selector.searcher).click();
        await browser.pause(3000);
    }

    async refillSearchTab(searchValue){
        await $(Selector.searchInput).addValue(searchValue);
        await $(Selector.searchButton).click();
    }

    async search(searchValue){
        await $(Selector.searcher).click();
        await $(Selector.searchInput).addValue(searchValue);
        await $(Selector.searchButton).click();
    }

    async closePromo(){
        await $(Selector.closePromo).click();
    }

    async scrollToNewsletter(){
        await $(Selector.languageChoice).scrollIntoView();
    }

    async checkCategories() {
        await browser.pause(1000);
        await $("#logoHeader").click();
        await browser.pause(1000);
        let baseUrl = await browser.getUrl();     //Provisional
        await $(Selector.categoryOne).scrollIntoView();
        await expect ($(Selector.categoryOne)).toBePresent();
        //await expect ($(Selector.categorySeven)).toBePresent();
        await $(Selector.categoryOne).click();
        await browser.pause(3000);

        //Fins que no tingui ID:
        //await expect ($(Selector.titleCategoryOne)).toHaveTextContaining('VESTIDOS DE MULHER');
        await $("#logoHeader").click();
        await expect(browser).toHaveUrlContaining('https://pre.venca.pt/');
        //Corregir quan tignui ID

        /*await this.openHomePage('home');
        await $(Selector.categorySeven).scrollIntoView();
        await $(Selector.categorySeven).click();
        await browser.pause(3000);

        //Fins que no tingui ID:
        //await expect ($(Selector.titleCategoryOne)).toHaveTextContaining('CALÇADO PARA MULHER');
        await $("#logoHeader").click();
        await expect(browser).toHaveUrlContaining(baseUrl);*/
        //Corregir quan tignui ID
    }

    async checkLinks() {
        await $(Selector.services).scrollIntoView();
        await expect ($(Selector.termsAndConditions)).toBePresent();
        //await ($(Selector.aboutUs)).toBeClickable();
        await expect ($(Selector.aboutUs)).toBePresent();
        await $(Selector.termsAndConditions).click();
        await expect ($(Selector.titleTermsAndContitions)).toBePresent();
        /* FINS QUE NO HI HAGI ID, NO VA
        await this.openHomePage('home');
        await $(Selector.aboutUs).scrollIntoView();
        await $(Selector.aboutUs).click();
        await browser.pause(3000);
        await expect ($(Selector.titleAboutUs)).toBePresent();*/
    }

    async clickOnCartIcon(element) {
        await element.click();
    }

    /*async checkLanguageButton() {
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONA OTRO IDIOMA:');
    }

    async checkDifferentLanguages() {
        await $(Selector.languageChoice).click();
        await expect($(Selector.languageSpanish)).toHaveTextContaining('CASTELLANO');
        await expect($(Selector.languageCatalan)).toHaveTextContaining('CATALÀ');
        await expect($(Selector.languageGalician)).toHaveTextContaining('GALLEGO');
        await expect($(Selector.languageEuskera)).toHaveTextContaining('EUSKERA');
    }

    async checkCatalan() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageCatalan).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONA UN ALTRE IDIOMA:');
    }

    async checkGalician() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageGalician).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONE OUTRO IDIOMA:');
    }

    async checkEuskera() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageEuskera).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('HAUTATU BESTE HIZKUNTZA BAT:');
    }

    async checkSpanish() {
        await $(Selector.languageChoice).click();
        await $(Selector.languageSpanish).click();
        await browser.pause(3000);
        await expect($(Selector.languageChoiceText)).toHaveTextContaining('SELECCIONA OTRO IDIOMA:');
    }*/

    async checkTopIcons() {
        await browser.pause(1500);
        await expect($(Selector.loginIcon)).toBeDisplayedInViewport();
        //await expect($(Selector.newIcon)).toHaveTextContaining('NEW');
        await expect($(Selector.favoritesIcon)).toBeDisplayedInViewport();
        //await expect($(Selector.helpIcon)).toHaveTextContaining('AJUDA');
        await expect($(Selector.cartIcon)).toBeDisplayedInViewport();
    }

    async checkLoginIcon() {
        await $(Selector.loginIcon).click();
        await expect ($(Selector.inputUsername)).toBePresent();
    }

    async checkNewIcon() {
        const baseUrl = await browser.getUrl();
        await $(Selector.newIcon).click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl(baseUrl);
    }

    async checkFavoritesIcon() {
        await $(Selector.favoritesIcon).click();
        await expect ($(Selector.titleFavoritesPage)).toBePresent();
    }

    async checkHelpIcon() {
        await $(Selector.helpIcon).click();
        await expect ($(Selector.titleHelpPage)).toBePresent();
    }

    async checkCartIcon() {
        await $(Selector.cartIcon).click();
        await expect ($(Selector.titleCartPage)).toBePresent();
    }

    async checkBuyFromPrintedCatalogue() {
        await $(Selector.buyFromPrintedCatalog).click();
        await expect ($(Selector.titlePrintedPage)).toBePresent();
    }

    async checkSocialIcons() {
        await $(Selector.footer).waitForClickable();
        /*await expect ($(Selector.appIcons)).toBeDisplayedInViewport();
        await expect ($(Selector.socialIcons)).toBeDisplayedInViewport();
        await expect ($(Selector.ekomiFooter)).toBeDisplayedInViewport();*/
        await expect ($(Selector.appIcons)).toBeDisplayedInViewport();
    }

    async testAppIcons() {
        const baseUrl = await browser.getUrl();
        await expect ($(Selector.appIconAndroid)).toBeDisplayed();
        await expect ($(Selector.appIconIOS)).toBeDisplayed();
        await expect ($(Selector.appIconAndroid)).toBeClickable();
        await expect ($(Selector.appIconIOS)).toBeClickable();

        await $(Selector.appIconAndroid).click();
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
        await browser.pause(1500);
        await browser.switchWindow('Google Play');
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://play.google.com/store/apps/details?id=mobapp.at.VencaPortugal&referrer=utm_source=web_venca&utm_medium=HomePage');
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);

        await $(Selector.appIconIOS).click();
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
        await browser.pause(1500);
        await browser.switchWindow('https://apps.apple.com/pt/app/venca-portugal-roupa-online/id999319261');
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://apps.apple.com/pt/app/venca-portugal-roupa-online/id999319261');
        await browser.pause(1500);
await browser.switchWindow(baseUrl);
    }

    async testSocialIcons() {
        const baseUrl = await browser.getUrl();
        await expect ($(Selector.socialIconsFacebook)).toBeDisplayed();
        await expect ($(Selector.socialIconsInstagram)).toBeDisplayed();
        await expect ($(Selector.socialIconsYoutube)).toBeDisplayed();
        await expect ($(Selector.socialIconsFacebook)).toBeClickable();
        await expect ($(Selector.socialIconsInstagram)).toBeClickable();
        await expect ($(Selector.socialIconsYoutube)).toBeClickable();

        await $(Selector.socialIconsFacebook).click();
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
        await browser.pause(1500);
        await browser.switchWindow('https://www.facebook.com/venca.pt/');
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://www.facebook.com/venca.pt/');
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);     

        await $(Selector.socialIconsInstagram).click();
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
        await browser.pause(1500);
        await browser.switchWindow('https://www.instagram.com/venca_pt/');
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://www.instagram.com/venca_pt/');
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);

        await $(Selector.socialIconsYoutube).click();
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
        await browser.pause(1500);
        await browser.switchWindow('https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCRjw8qNdt0Aq2rPqOhZ09Xg%3Fcbrd%3D1&gl=ES&m=0&pc=yt&cm=2&hl=es&src=1');
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCRjw8qNdt0Aq2rPqOhZ09Xg%3Fcbrd%3D1&gl=ES&m=0&pc=yt&cm=2&hl=es&src=1');
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
    }

    async testEkomiFooter() {
        const baseUrl = await browser.getUrl();
        await expect ($(Selector.ekomiFooter)).toBeDisplayed();
        await expect ($(Selector.ekomiFooter)).toBeDisplayed();

        await $(Selector.ekomiFooter).click();
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
        await browser.pause(1500);
        await browser.switchWindow('https://www.ekomi.pt/avaliacao-digital-lola-commerce-sau.html');
        await browser.pause(1500);
        await expect(browser).toHaveUrl('https://www.ekomi.pt/avaliacao-digital-lola-commerce-sau.html');
        await browser.pause(1500);
        await browser.switchWindow(baseUrl);
    }
}

module.exports = new HomePage();