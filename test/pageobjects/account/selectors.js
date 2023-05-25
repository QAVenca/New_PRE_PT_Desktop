module.exports = {
    modalUnsuscribe: "#modal-unsubscribe",
    unsuscribreButton: "#unsuscribe",
    unsuscribe1: "#UnsubscribeReason[value=\"Recibo demasiados emails\"]",
    unsuscribe2: "#UnsubscribeReason[value=\"No me interesa el contenido\"]",
    frequency1: "#Frequency[value=\"1\"]",
    frequency2: "#Frequency[value=\"0\"]",
    contactAbout1: "#Type[value=\"N\"]",
    contactAbout2: "#Type[value=\"N\"]",
    saveContactPreferences: "#saveChanges",
    myContact: "#myContactPreferences > div",
    messagesList: "/html/body/main/div/h1",
    myMessages: "#myMessages > div",
    acceptPrivacity: "#LOPDAuthorization[value=\"True\"]",
    rejectPrivacity: "#LOPDAuthorization[value=\"False\"]",
    myPassword: "#mypassword > div",
    passwordButtonSubmit: "/html/body/main/div/form/div/div[4]/button", 
    presentPassword: "#PasswordToModify",
    newPassword: "#Password",
    confirmPassword: "#ConfirmPassword",
    confirmMyData: "//*[@id=\"mis_datos\"]/div[2]/div/div[1]/span[2]",
    myPrivacity: "#myprivacity > div",
    privacityButtonSubmit: "body > main > form > div > section > div:nth-child(2) > button",
    myAccount: "[data-uitest=\"userMyAccount\"]",
    myDataPanel: "#mis_datos",
    myOrders: "#myorders > div",
    myOrdersPanel: "#myorders > div",
    myData: "#mydata > div",
    modifyDataButton: "[data-uitest=\"modifyData\"]",
    modifyName: "[data-uitest=\"modifyName\"]",
    modifySurname: "[data-uitest=\"modifySurname\"]",
    modifyDayOfBirth: "[data-uitest=\"modifyDayOfBirth\"]",
    modifyMonthOfBirth: "[data-uitest=\"modifyMonthOfBirthDropdown\"]",
    monthOptions: "'[data-uitest=\"modifyMonthOfBirthOptions\"]",
    month8: "8",
    month11: "11",
    monthOption8: "[data-id=\"8\"]",
    monthOption11: "[data-id=\"11\"]",
    modifyYearOfBirth: "[data-uitest=\"modifyYearOfBirth\"]",
    generoFemenino: "mujer",
    generoMasculino: "hombre",
    modifyGenerFemale: "[data-uitest=\"modifyGenerFemale\"]",
    modifyGenderMale: "[data-uitest=\"modifyGenerMale\"]",
    modifyAdressStreet: "[data-uitest=\"modifyAdressStreet\"]",
    modifyAdressNumber: "[data-uitest=\"modifyAdressNumber\"]",
    modifyAdressAdditional: "[data-uitest=\"modifyAdressAdditional\"]",
    modifyAdressCity: "[data-uitest=\"modifyAdressCity\"]",
    modifyAdressPostalCode: "[data-uitest=\"modifyAdressPostalCode\"]",
    modifyAdressProvince: "[data-uitest=\"modifyAdressProvince\"]",
    modifyAdressPhone: "[data-uitest=\"modifyAdressPhone\"]",
    modifyValidateChanges: "[data-uitest=\"modifyValidateChanges\"]",
    myDirections: "#myaddresses > div",
    addDirectionButton: "/html/body/main/div/div/div[4]/a/div",
    addDirectionTitle: "[data-uitest=\"addressTitle\"]",
    addDirectionStreet: "[data-uitest=\"addressStreet\"]",
    addDirectionNumber: "[data-uitest=\"addressNumber\"]",
    addDirectionAdditional: "#Adress_Additional",
    addDirectionCity: "[data-uitest=\"addressCity\"]",
    addDirectionPostalCode: "[data-uitest=\"addressPostalCode\"]",
    addDirectionProvinceDropdown: "[data-uitest=\"provinceOption\"]",
    addDirectionProvinceOption: "[data-id=\"BARCELONA\"]",
    addDirectioSubmitButton: "[data-function=\"edit-confirm\"]",
    deleteDirectionButton: "//*[@id=\"myAddressesList\"]/div[3]/div[2]/a[2]",
    myPayments: "#mypayments",
    paymentsList: "//*[@id=\"paymentList\"]/div/h1",
}

/*class SelectorsAccount{

    get contactAbout1() {
        return $('#Type[value="N"]');
    }

    get contactAbout2() {
        return $('#Type[value="N"]');
    }

    get frequency1() {
        return $('#Frequency[value="1"]');
    }

    get frequency2() {
        return $('#Frequency[value="0"]');
    }

    get unsuscribe1(){
        return $('#UnsubscribeReason[value="Recibo demasiados emails"]');
    }

    get unsuscribe2(){
        return $('#UnsubscribeReason[value="No me interesa el contenido"]');
    }

    get acceptPrivacity(){
        return $('#LOPDAuthorization[value="True"]');
    }

    get rejectPrivacity(){
        return $('#LOPDAuthorization[value="False"]');
    }

    get myMessages(){
        return $('#myMessages');
    }

    get messagesList() {
        return $('/html/body/main/div/h1');
    }

    get myContact() {
        return $('#myContactPreferences');
    }

    get saveContactPreferences() {
        return $('#saveChanges');
    }
    
    get unsuscribreButton(){
        return $('#unsuscribe');
    }

    get modalUnsuscribe(){
        return $('#modal-unsubscribe');
    }

    get myPassword() {
        return $('#mypassword');
    }

    get passwordButtonSubmit() { 
        return $('/html/body/main/div/form/div/div[4]/button');
    }

    get presentPassword(){
        return $('#PasswordToModify');
    }

    get newPassword(){
        return $('#Password');
    }

    get confirmPassword(){
        return $('#ConfirmPassword');
    }

    get confirmMyData() {
        return $('//*[@id="mis_datos"]/div[2]/div/div[1]/span[2]');
    } 

    get myPrivacity() {
        return $('#myprivacity');
    }

    get privacityButtonSubmit() {
        return $('/html/body/main/div/div/form/button');
    }

    get myAccount() {
        return $('[data-uitest="userMyAccount"]');
    }

    get myDataPanel() {
        return $('[data-uitest="myData"]');
    }

    get myOrders() {
        return $('#myorders');
    }

    get myOrdersPanel() {
        return $('#myOrders');
    }

    get myData() {
        return $('#mydata');
    }

    get modifyDataButton() {
        return $('[data-uitest="modifyData"]');
    }

    get modifyName() {
        return $('[data-uitest="modifyName"]');
    }

    get modifySurname() {
        return $('[data-uitest="modifySurname"]');
    }

    get modifyDayOfBirth() {
        return $('[data-uitest="modifyDayOfBirth"]');
    }

    get modifyMonthOfBirth() {
        return $('[data-uitest="modifyMonthOfBirthDropdown"]');
    }

    get monthOptions() {
        return $('[data-uitest="modifyMonthOfBirthOptions"]');
    }

    get modifyYearOfBirth() {
        return $('[data-uitest="modifyYearOfBirth"]');
    }

    get modifyGenderFemale() {
        return $('[data-uitest="modifyGenerFemale"]');
    }

    get modifyGenderMale() {
        return $('[data-uitest="modifyGenerMale"]');
    }

    get modifyAdressStreet() {
        return $('[data-uitest="modifyAdressStreet"]');
    }

    get modifyAdressNumber() {
        return $('[data-uitest="modifyAdressNumber"]');
    }

    get modifyAdressAdditional() {
        return $('[data-uitest="modifyAdressAdditional"]');
    }

    get modifyAdressCity() {
        return $('[data-uitest="modifyAdressCity"]');
    }

    get modifyAdressPostalCode() {
        return $('[data-uitest="modifyAdressPostalCode"]');
    }

    get modifyAdressProvince() {
        return $('[data-uitest="modifyAdressProvince"]');
    }

    get modifyAdressPhone() {
        return $('[data-uitest="modifyAdressPhone"]');
    }

    get modifyValidateChanges() {
        return $('[data-uitest="modifyValidateChanges"]');
    }

    get myDirections() {
        return $('#myaddresses');
    }

    get addDirectionButton() {
        return $('/html/body/main/div/div/div[4]/a/div');
    }

    get addDirectionTitle() {
        return $('[data-uitest="addressTitle"]');
    }

    get addDirectionStreet() {
        return $('[data-uitest="addressStreet"]');
    }

    get addDirectionNumber() {
        return $('[data-uitest="addressNumber"]');
    }

    get addDirectionAdditional() {
        return $('#Adress_Additional');
    }

    get addDirectionCity() {
        return $('[data-uitest="addressCity"]');
    }

    get addDirectionPostalCode() {
        return $('[data-uitest="addressPostalCode"]');
    }

    get addDirectionProvinceDropdown() {
        return $('[data-uitest="provinceOption"]');
    }

    get addDirectionProvinceOption() {
        return $('[data-id="BARCELONA"]');
    }

    get addDirectioSubmitButton() {
        return $('[data-function="edit-confirm"]');
    }

    get deleteDirectionButton() {
        return $('//*[@id="myAddressesList"]/div[3]/div[2]/a[2]')
    }

    get myPayments() {
        return $('#mypayments');
    }

    get paymentsList() {
        return $('//*[@id="paymentList"]/div/h1');
    }

}
module.exports = new SelectorsAccount();*/
