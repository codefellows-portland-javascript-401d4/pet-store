// class StoresAllPage {
//   constructor() {
//     const nav = element.all(by.css('nav a'));
//     this.stores = nav.get(1);
//     this.uiView = element(by.css('main ui-view'));
//   }

//   get() {
//     return browser.get('/');
//   }

//   get title() {
//     return browser.getTitle();
//   }

//   get url() {
//     return browser.getLocationAbsUrl();
//   }

//   get stateComponent() {
//     return element(by.css());
//   }
// }

describe ('Pet store app', () => {

  it ('welcome page has title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('AllKindza Pets');
  });

  describe ('default state', () => {

    it ('goes to /welcome url', () => {
      expect(browser.getLocationAbsUrl()).toBe('/welcome');
    });

  });

  // describe ('stores.all state', () => {

  //   it ('link navigates to stores.all', () => {
  //     element(by.css('#goto-stores')).click();
  //     expect(browser.getLocationAbsUrl()).toBe('/stores/all');
  //   });

  //   it ('uses the storesAll component', () => {
  //     expect(element(by.css('main ui-view')).all(by.css('*')).first().getTagName()).toEqual('stores');
  //   });

  //   it ('displays header with company name', () => {
  //     // TODO: check for header
  //     const header = element(by.css('header h1')).getText();
  //     expect(header).toEqual('AllKindza Pets');
  //   });

  //   it ('displays a list of stores', () => {
  //     const rows = element.all(by.css('.storelink')).getTagName();
  //     expect(rows.count()).toBeGreaterThan(1);
  //   });

  //   it ('has a link going to stores.add', () => {
  //     element(by.css('#add-store')).click();
  //     expect(browser.getLocationAbsUrl()).toEqual('/stores/add');
  //   });

  //   it ('cancel button returns to stores.all', () => {
  //     element(by.css('#cancel-add-store')).click();
  //     expect(browser.getLocationAbsUrl()).toEqual('/stores/all');
  //   });

  //   it ('clicking on a store listing goes to store.pets for that store', () => {
  //     // TODO: click on a store and check for state store.pets (component, url, etc.)
  //     element.all(by.css('.storelink')).first().click();
  //     expect(browser.getLocationAbsUrl()).toMatch(/[0-9a-f]+\/pets/);
  //   });

  // });

});