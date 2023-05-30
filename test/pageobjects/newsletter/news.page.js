const Selector = require('../../pageobjects/newsletter/selectors');
let news_check = false;

class Newsletter {

    async close(Element){
        await Element.waitForClickable();
        await Element.click();
    }

    async closeNewsletter(){
        if(news_check == false) {
            await $(Selector.modalClose).waitForClickable();
            await $(Selector.modalClose).click();
            news_check = true;
        }
    }

    async wrongTerms(){
        const checkBoxError = await $(Selector.newsletterTermsError);
        await $(Selector.newsletterSubmit).click();
        return checkBoxError;
    }

    async wrongCredential(userEmail){
        await $(Selector.newsletterEmailFooter).waitForEnabled();
        await $(Selector.newsletterEmailFooter).setValue(userEmail);
        await $(Selector.newsletterSubmitFooter).click();
    }

    async rightCredential(userEmail){
        await $(Selector.newsletterEmailFooter).waitForEnabled();
        await $(Selector.newsletterEmailFooter).setValue(userEmail);
        await $(Selector.newsletterTermsCheckbox).click();
        await $(Selector.newsletterSubmitFooter).click();
        
    }

    async checkModalNewsletter() {
        await expect($(Selector.popupNewsletter)).toBePresent();
    }

    async checkIncorrectValues() {        
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await this.wrongCredential('asdfgh@sdad@asd');
        await expect ($(Selector.newsletterMailError)).toHaveTextContaining('Por favor, introduza um endereço eletrónico válido');
    }

    async checkTermsAndConditions() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await this.wrongCredential('vencaautomatedtest@gmail.com');
        await expect ($(Selector.newsletterTermsError)).toHaveTextContaining('Deve aceitar as condições de utilização para poder continuar.');
    }

    async checkTermsWithoutValues() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await $(Selector.newsletterTermsCheckbox).click();
        await $(Selector.newsletterSubmitFooter).click();
    }

    async checkNewsletterFooter() {
        await $(Selector.newsletterSubmitFooter).waitForClickable();
        await browser.pause(3000);
        await $(Selector.newsletterSubmitFooter).waitForClickable();
        await expect ($(Selector.newsletterSectionFooter)).toBeDisplayedInViewport();
    }

    async checkCorrectValues() {
        await $(Selector.newsletterSubmitFooter).scrollIntoView();
        await this.closeNewsletter();
        await this.rightCredential('vencaautomatedtest@gmail.com');
        await expect ($(Selector.newsletterThankYou)).toBeDisplayedInViewport();
    }
}

module.exports = new Newsletter();