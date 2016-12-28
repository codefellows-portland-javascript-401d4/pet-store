export default class StoresPage {
    constructor() {
        const nav = element.all(by.css('button'));
        this.aAddStore = nav.get(0);
        this.uiView = element(by.css('main ui-view'));
    }

    get() {
        return browser.get('/');
    }

    get title() {
        return browser.getTitle();
    }

    get url() {
        return browser.getLocationAbsUrl(); 
    }

    get stateComponent() {
        return this.uiView.all(by.css('*')).first().getTagName();

    }

    goToAddStore() {
        this.aAddStore.click();
    }

}
