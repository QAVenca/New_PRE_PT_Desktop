const Page = require('../../pageobjects/page');
const selectors = require('./selectors');
const Data = require('../data');

class AccountPage extends Page {

    async goToMyOrdersSection() {
        await $(selectors.myOrders).click();
        await browser.pause(3000);
        await expect($(selectors.myOrdersPanel)).toBeDisplayedInViewport();
    }

    async goToMyDataSection() {
        await $(selectors.myData).click();
        await expect($(selectors.modifyDataButton)).toBeClickable();
    }

    async goToMyDirectionsSection() {
        await $(selectors.myDirections).click();
        await expect($(selectors.addDirectionButton)).toBeClickable();
    }

    async goToMyPasswordSection() {
        await $(selectors.myPassword).click();
        await expect($(selectors.passwordButtonSubmit)).toBePresent();
    }

    async goToMyPrivacitySection() {
        await $(selectors.myPrivacity).click();
        await expect($(selectors.privacityButtonSubmit)).toBePresent();
    }

    async goToMyMessagesSection() {
        await $(selectors.myMessages).click();
        await expect($(selectors.messagesList)).toBePresent();
    }

    async goToMyContactSection() {
        await $(selectors.myContact).click();
        await expect($(selectors.saveContactPreferences)).toBePresent();
    }

    async changeNewsletterFrequency() {
        await $(selectors.contactAbout1).click();
        await $(selectors.frequency1).click();
        await expect($(selectors.contactAbout1)).toBeChecked();
        await expect($(selectors.frequency1)).toBeChecked();
    }

    async resetContactFrequency() {
        await $(selectors.contactAbout2).click();
        await $(selectors.frequency2).click();
        await expect($(selectors.contactAbout2)).toBeChecked();
        await expect($(selectors.frequency2)).toBeChecked();
    }

    async acceptPrivacity() {
        await $(selectors.acceptPrivacity).click();
        await $(selectors.privacityButtonSubmit).click();
        await expect($(selectors.confirmMyData)).toBePresent();
    }

    async rejectPrivacity() {
        await $(selectors.rejectPrivacity).click();
        await $(selectors.privacityButtonSubmit).click();
        await expect($(selectors.confirmMyData)).toBePresent();
    }

    async changePassword() {
        await $(selectors.presentPassword).waitForEnabled();
        await $(selectors.presentPassword).setValue(Data.customer.currentPassword);
        await $(selectors.newPassword).waitForEnabled();
        await $(selectors.newPassword).setValue(Data.customer.newPassword);
        await $(selectors.confirmPassword).waitForEnabled();
        await $(selectors.confirmPassword).setValue(Data.customer.newPassword);
        await $(selectors.passwordButtonSubmit).waitForEnabled();
        await $(selectors.passwordButtonSubmit).click();
        await expect($(selectors.confirmMyData)).toBePresent();
    }

    async resetPassword() {
        await $(selectors.presentPassword).waitForEnabled();
        await $(selectors.presentPassword).setValue(Data.customer.newPassword);
        await $(selectors.newPassword).waitForEnabled();
        await $(selectors.newPassword).setValue(Data.customer.currentPassword);
        await $(selectors.confirmPassword).waitForEnabled();
        await $(selectors.confirmPassword).setValue(Data.customer.currentPassword);
        await $(selectors.passwordButtonSubmit).waitForEnabled();
        await $(selectors.passwordButtonSubmit).click();
        await expect($(selectors.confirmMyData)).toBePresent();
    }

    async unsuscribeFromNewsletter() {
        await $(selectors.unsuscribe1).click();
        await $(selectors.unsuscribreButton).click();
        await expect($(selectors.modalUnsuscribe)).toBePresent();
    }

    async chooseData(){
        await this.putDataValues(
            Data.customer.name,
            Data.customer.surname,
            Data.customer.birthDateDay,
            Data.customer.birthDateMonth,
            Data.customer.birthDateYear,
            Data.customer.gender,
            Data.customer.street,
            Data.customer.number,
            Data.customer.additionalAdress,
            Data.customer.city,
            Data.customer.postalCode,
            Data.customer.province,
            Data.customer.phone);
        await $(selectors.modifyValidateChanges).click();
        await expect($(selectors.modifyDataButton)).toBeClickable();
    }

    async chooseDataDirection(){
        await this.putDataDirectionValues('Work', 
        Data.customer.street, 
        Data.customer.number,
        Data.customer.additionalAdress,
        Data.customer.city,
        Data.customer.postalCode);
        await $(selectors.addDirectioSubmitButton).click();
        await expect($(selectors.addDirectionButton)).toBeClickable();
    }

    /*
    Aquesta funció va dins un hook o alguna cosa d'aquestes per fer reset de les dades anteriors.
    He pogut solucionar el problema del if.

    async resetData() {
        await this.putDataValues('Alex', 'Lopez', '1', '8', '1990', 'hombre', 'Cid', '19', 'puerta', 'Vilafranca del Penedès', '08720', 'Barcelona', '687254978');
    }    */
    
    async eraseDirection() {
        await $(selectors.deleteDirectionButton).click();
    }

    async putDataValues(name, surname, day, month, year, gender, street, number, additional, city, postalCode, province, phone) {
        await $(selectors.modifyName).setValue(name);
        await $(selectors.modifySurname).setValue(surname);
        await $(selectors.modifyDayOfBirth).setValue(day);
        await $(selectors.modifyMonthOfBirth).click();
        if(month == selectors.month8){
            await $(slectors.monthOption8).click();
        } else if (month == selectors.month11) {
            await  $(selectors.monthOption11).click();
        }
        await $(selectors.modifyYearOfBirth).setValue(year);
        if(gender == selectors.generoMasculino){
            await $(selectors.modifyGenderFemale).click();
        }else if (gender == selectors.generoFemenino){
            await $(selectors.modifyGenderMale).click();
        }
        await $(selectors.modifyAdressStreet).setValue(street);
        await $(selectors.modifyAdressNumber).setValue(number);
        await $(selectors.modifyAdressAdditional).setValue(additional);
        await $(selectors.modifyAdressCity).setValue(city);
        await $(selectors.modifyAdressPostalCode).setValue(postalCode);
        await $(selectors.modifyAdressProvince).setValue(province);
        await $(selectors.modifyAdressPhone).setValue(phone);
    }

    async putDataDirectionValues(title, street, number, additional, city, postalCode) {
        await $(selectors.addDirectionTitle).setValue(title);
        await $(selectors.addDirectionStreet).setValue(street);
        await $(selectors.addDirectionNumber).setValue(number);
        //await selectors.addDirectionAdditional.setValue(additional);
        await $(selectors.addDirectionCity).setValue(city);
        await $(selectors.addDirectionPostalCode).setValue(postalCode);
        await $(selectors.addDirectionProvinceDropdown).click();
        await $(selectors.addDirectionProvinceOption).click();
    }

    async clearDataValues() {
        await $(selectors.modifyName).clearValue();
        await $(selectors.modifySurname).clearValue();
        await $(selectors.modifyDayOfBirth).clearValue();
        await $(selectors.modifyYearOfBirth).clearValue();
        await $(selectors.modifyAdressStreet).clearValue();
        await $(selectors.modifyAdressNumber).clearValue();
        await $(selectors.modifyAdressAdditional).clearValue();
        await $(selectors.modifyAdressCity).clearValue();
        await $(selectors.modifyAdressPostalCode).clearValue();
        await $(selectors.modifyAdressProvince).clearValue();
        await $(selectors.modifyAdressPhone).clearValue();
    }

    async clearDataDirectionValues() {
        await $(selectors.addDirectionTitle).clearValue();
        await $(selectors.addDirectionStreet).clearValue();
        await $(selectors.addDirectionNumber).clearValue();
        await $(selectors.addDirectionCity).clearValue();
        await $(selectors.addDirectionPostalCode).clearValue();
    }

    async checkValuesEnabled() {
        await $(selectors.modifyDataButton).click();
        await $(selectors.modifyName).waitForEnabled();
        await $(selectors.modifySurname).waitForEnabled();
        await $(selectors.modifyDayOfBirth).waitForEnabled();
        await $(selectors.modifyMonthOfBirth).waitForEnabled();
        await $(selectors.modifyYearOfBirth).waitForEnabled();
        await $(selectors.modifyAdressStreet).waitForEnabled();
        await $(selectors.modifyAdressNumber).waitForEnabled();
        await $(selectors.modifyAdressAdditional).waitForEnabled();
        await $(selectors.modifyAdressCity).waitForEnabled();
        await $(selectors.modifyAdressPostalCode).waitForEnabled();
        await $(selectors.modifyAdressProvince).waitForEnabled();
        await $(selectors.modifyAdressPhone).waitForEnabled();
        await $(selectors.modifyValidateChanges).waitForEnabled();
    }
    
    async checkValuesDirectionEnabled() {
        await $(selectors.addDirectionButton).click();
        await $(selectors.addDirectionTitle).waitForEnabled();
        await $(selectors.addDirectionStreet).waitForEnabled();
        await $(selectors.addDirectionNumber).waitForEnabled();
        await $(selectors.addDirectionCity).waitForEnabled();
        await $(selectors.addDirectionPostalCode).waitForEnabled();
    }

}

module.exports = new AccountPage();