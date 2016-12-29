export default class StoresPage {
    constructor() {

    }

    get() {
        return browser.get('/stores/all');
    }

    get title() {
        return browser.getTitle();
    }

    
}