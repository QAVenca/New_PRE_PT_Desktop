const Chicksize = require('../../pageobjects/chicksize/chicksize.page');
const Selectors = require('../../pageobjects/chicksize/selectors')

describe('ChickSize Activity', () => {
    it('ChickSize shows an appropriate title', async () => {
        await Chicksize.chicksizePage();
        await expect($(Selectors.title)).toHaveTextContaining('TAMANHOS GRANDES MULHER');
    });

    it('Buttons \'Anterior\' and \'Siguiente\' should go to before/next ChickSize page', async () => {
        await Chicksize.chicksizePage();
        await Chicksize.scrollToNextPage();
        await Chicksize.buttons();
        await expect($(Selectors.next)).toBeClickable();
    });

    it('Links on header ChickSize should go to a correct page', async () =>{
        await Chicksize.chicksizePage();
        await $(Selectors.dressLink).click();
        //await expect($(Selectors.dressStorefront)).toHaveTextContaining('VESTIDOS EM TAMANHOS GRANDES PARA MULHER');
        await expect($(Selectors.dressStorefront)).toHaveTextContaining('VESTIDOS EM TAMANHOS GRANDES PARA MULHER');
    });

    it('"Solo productos de Venca" checkbox should function', async () =>{
        await Chicksize.chicksizePage();
        await browser.pause(10000);
        await Chicksize.sortByVenca();
        await browser.pause(10000);
        //Falta l'expect
    });
});