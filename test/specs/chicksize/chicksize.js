const Chicksize = require('../../pageobjects/chicksize/chicksize.page');
const Selectors = require('../../pageobjects/chicksize/selectors');
const Steps = require('../../pageobjects/steps'); 

describe('ChickSize Activity', () => {
    it.skip('ChickSize shows an appropriate title', async () => {
        await Chicksize.chicksizePage();
        //await expect($(Selectors.title)).toHaveTextContaining('TALLAS GRANDES MUJER'); 
        await expect($(Selectors.title)).toHaveTextContaining('Tamanhos grandes para mulher'); 
    });

    it.skip('Buttons \'Anterior\' and \'Siguiente\' should go to before/next ChickSize page', async () => {
        await Chicksize.chicksizePage();
        await Chicksize.scrollToNextPage();
        await Chicksize.buttons();
        await expect($(Selectors.next)).toBeClickable();
    });

    it('Links on header ChickSize should go to a correct page', async () =>{
        await Chicksize.chicksizePage();
        await Steps.initialCloseAll();
        await $(Selectors.dressLink).waitForClickable();
        await browser.pause(10000);
        await $(Selectors.dressLink).click();
        await browser.pause(10000);
        await expect($(Selectors.dressStorefront)).toHaveTextContaining('VESTIDOS EM TAMANHOS GRANDES PARA MULHER');
    });

    it.skip('"Solo productos de Venca" checkbox should function', async () =>{
        await Chicksize.chicksizePage();
        await browser.pause(10000);
        await Chicksize.sortByVenca();
        await browser.pause(10000);
        //Falta l'expect
    });
});