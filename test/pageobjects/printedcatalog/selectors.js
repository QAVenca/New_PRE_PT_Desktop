module.exports = {
    printedCatalogButton: "[data-uitest=\"catalog\"]",
    searchProductButton: "body > main > div.col-sm-12.antiVoffset3 > div.collapseCatalog.out.collapse.in > fieldset > div > div > div.col-sm-6.pull-left > button > div",
    searchInputField: "[data-uitest=\"catalogReference\"]",
    resultTitle: "//*[@id=\"buyFromCatalog\"]/div/section/div/div/div/div/div[1]",
    colorDropdown: "#dropdownColor",
    colorOption: "[data-id=\"050076009\"]",
    sizeDropdown: "#dropdownSize",
    sizeOption: "[data-id=\"4XL\"]",
    addToCart: "[data-uitest=\"addToCart\"",
}

/*class PrintedCatalog{

    get printedCatalogButton() {
        return $('[data-uitest="catalog"]');
    }

    get searchProductButton() {
        //return $('/html/body/main/div[3]/div[2]/fieldset/div/div/div[2]/button');
        return $('body > main > div.col-sm-12.antiVoffset3 > div.collapseCatalog.out.collapse.in > fieldset > div > div > div.col-sm-6.pull-left.antiVoffset3 > button');
    }

    get searchInputField() {
        return $('[data-uitest="catalogReference"]');
    }

    get resultTitle() {
        return $('//*[@id="buyFromCatalog"]/div/section/div/div/div/div/div[1]');
    }

    get colorDropdown() {
        return $('#dropdownColor');
    }

    get colorOption() {
        return $('[data-id="040144077"]');
    }

    get sizeDropdown() {
        return $('#dropdownSize');
    }

    get sizeOption() {
        return $('[data-id="4XL"]');
    }

    get addToCart() { 
        return $('[data-uitest="addToCart"');
    }
}

module.exports = new PrintedCatalog();*/