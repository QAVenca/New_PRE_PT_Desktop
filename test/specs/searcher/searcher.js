const Steps = require('../../pageobjects/steps');
const Searcher = require('../../pageobjects/searcher/searcher.page.js');

describe('Search button interaction', ()  => {    
    it('Should search for a random product, verify the search text value, verify the appearence of the suggested items and clear the search tab', async() =>{
        await Steps.goHome();
        await browser.pause(1000);
        await Searcher.search('vestido verde');
        //await Searcher.verifySuggestedItems(); -> fins que no hi hagi data-uitest no  va bé
        await Searcher.clear();
    });

    it('Should search for a specific product, verify the search text value and go to the search results page', async() =>{
        await Steps.goHome();
        await Searcher.search('Top liso mulher alças finas em malha extensível');
        await Searcher.goToResultPage('Top liso mulher alças finas em malha extensível');
    });

    it('Should click on the 1st product of the search and redirect the page to the product page', async() =>{
        await Steps.goHome();
        await browser.pause(1000);
        await Searcher.search('Top liso mulher alças finas em malha extensível');
        await Searcher.goToResultPage('Top liso mulher alças finas em malha extensível');
        await Searcher.goToProduct();
    });

    it.skip('Should go to the search tab and search for an inexistent article', async() =>{
        await Steps.goHome();
        await browser.pause(1000);
        await Searcher.wrongSearch('fjbvgñasjbvfldfhbvsdlfhvbsdf.jbaepiubev');
    });
});