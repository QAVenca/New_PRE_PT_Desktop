module.exports = {
    visitColectionButton: "//*[@id=\"results\"]/div[2]/a/div",
    storefrontTitle: "[data-uitest=\"storefrontTitle\"]",
    storefrontFirstArticle: "[data-uitest=\"storefrontProductsList\"]",
    storefrontFirstArticleWishlistButton: "#results > section:nth-child(3) > div:nth-child(1) > div:nth-child(2) > a > div.storefrontWishIcon > button",
    removeWishlistButton: "//*[@id=\"wishList\"]/section/section/div/div[1]",
    emptyWishlist2: "//*[@id=\"results\"]/div[2]/div[2]",
    colorDropdownMenu: "//*[@id=\"selectedColor_0\"]",
    defaultColor: "//*[@id=\"colors_0\"]/ul/li[1]/button",
    sizeDropDownMenu: "#dropdownSize_0",
    defaultSize: "//*[@id=\"sizes_0\"]/ul/li[1]/a",
    addToCart: "#addToBasket_0",
    //favoritesIcon: "",
    //cartAddToFavourites: "//*[@id=\"guardarFavorito1\"]",
    cartAddToFavourites: "#guardarFavorito1"
}

/* class SelectorWishlist{
    get visitColectionButton(){
        return $('//*[@id="results"]/div[2]/a/div');
    }
    get storefrontTittle(){
        return $('[data-uitest="storefrontTitle"]');
    }
    get storefrontFirstArticle(){
        return $('[data-uitest="storefrontProductsList"]');
    }
    get storefrontFirstArticleWishlistButton(){
        return $('//*[@id="results"]/section[2]/div[1]/div/a/div[2]/div[2]/button/i');
    }
    get removeWishlistButton(){
        return $('//*[@id="wishList"]/section/section/div/div[1]');
    }
    get emptyWishlist2(){
        return $('//*[@id="results"]/div[2]/div[2]');
    }
    get colorDropdownMenu(){
        return $('//*[@id="selectedColor_0"]');
    }
    get defaultColor(){
        return $('//*[@id="colors_0"]/ul/li[1]/button');
    }
    get sizeDropDownMenu(){
        return $('#dropdownSize_0');
    }
    get defaultSize(){
        return $('//*[@id="sizes_0"]/ul/li[1]/a');
    }
    get addToCart(){
        return $('#addToBasket_0');
    }
    get cartAddToFavourites(){
        return $('//*[@id="guardarFavorito1"]');
    }
}

module.exports = new SelectorWishlist(); */