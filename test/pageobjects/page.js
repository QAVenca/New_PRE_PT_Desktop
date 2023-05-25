
module.exports = class Page {

    openHomePage (path) {
       return browser.url(`./${path}`)
   }
}