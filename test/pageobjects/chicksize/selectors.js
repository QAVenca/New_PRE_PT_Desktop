module.exports = {
    chicksize: "[data-vc-node-id=\"4\"]",
    allChicksize: "[data-uitest=\"navigateProductSubcategories\"]",
    title: "[data-uitest=\"homeTitle\"]",
    dressLink: "body > main > div:nth-child(6) > div > div > div:nth-child(1) > a > img",
    dressStorefront: "[data-uitest=\"storefrontTitle\"]",
    product: "[data-uitest=\"storefrontProductsImage\"]",
    prev: "[data-ui-test=\"btnStrBefore\"]",
    next: "[data-uitest=\"btnStrAfter\"]",
    nextPage: "https://pre.venca.es/e/38/moda-mujer?page=2",
    prevPage: "https://pre.venca.es/e/38/moda-mujer?page=2",
    onlyVencaCheckBox: "#summaryResults > div:nth-child(2) > div > div.pt-05.pr-30 > label",
}

/*class SelectorsStorefront {

    get chicksize(){
        return $('[data-vc-node-id="4"]');
    }

    get allChicksize(){
        return $('[data-uitest="navigateProductSubcategories"]');
    }

    get title() {
        return $('[data-uitest="storefrontTitle"]');
    }

    get dressLink() {
        return $('[class="tab swiper-slide bold700 swiper-slide-next"]');
    }

    get dressStorefront() {
        return $('[data-uitest="storefrontTitle"]');
    }

    get product() {
        return $('[data-uitest="storefrontProductsImage"]');
    }
    
    get prev() {
        //return $('[data-ui-test="btnStrBefore"]');
        return $('#results > section.row.btButtons.voffset4.antiVoffset5 > div.col-sm-3.col-md-2.col-md-offset-2 > a');
    }

    get next() {
        //return $('[data-uitest="btnStrAfter"]');
        return $('#results > section.row.btButtons.voffset4.antiVoffset5 > div:nth-child(3)');
    }

    get nextPage(){
        return 'https://pre.venca.es/e/38/moda-mujer?page=2';
    }

    get prevPage(){
        return 'https://pre.venca.es/e/38/moda-mujer?page=2';
    }

    get onlyVencaCheckBox(){
        return $('#summaryResults > div:nth-child(2) > div > div.pt-05.pr-30 > label');



        
    }

}

module.exports = new SelectorsStorefront();*/