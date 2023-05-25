const Steps = require('../../pageobjects/steps');
const WishlistPage = require('../../pageobjects/wishlist/wishlist.page');


describe('Wishlist interaction', () => {

    it('should login with valid credentials and go to FAVORITOS page', async () => {
        await Steps.login();
        await WishlistPage.goToWishlist();
    });

    it('should go to storefront through the button in the wishlist page, \n\t\t\t\t\t  the first product in the storefront should have the wishlist button, \n\t\t\t\t\t  add it, check if it is displayed on the wishlist page and remove it', async () => {
        await Steps.login();
        await WishlistPage.goToWishlist();
        await WishlistPage.checkItemsAndRemoveThem();
        await WishlistPage.goToStorefront();
        await WishlistPage.checkIconFirstProduct();
        await WishlistPage.checkAddProdutToWishlist();
        await WishlistPage.checkItemsAndRemoveThem();
    });

    it.skip('should add the forementioned item and add it to the cart', async () => {
        await Steps.login();
        await WishlistPage.goToWishlist();
        await WishlistPage.goToStorefront();
        await WishlistPage.checkAddProdutToWishlist();
        await WishlistPage.addToCart();
        await WishlistPage.checkEmptyWishList();
    });

    it.skip('should go to cart, add the product to the wishlist again and remove it', async () => {
        await Steps.login();
        await WishlistPage.goToCart();
        await WishlistPage.addToWishlistFromCart();
        await WishlistPage.removeFromWishlistInCart();       
    });
});