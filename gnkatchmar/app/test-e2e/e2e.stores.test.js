//stopped working when Auth was added
describe('Stores Page', () => {

  it('should have the correct title', () => {
    browser.get('#!/stores/all');
    expect(browser.getTitle()).toEqual('Pet Stores');
  });
    
  describe('navigation', () => {

    it('stores/all functions', () => {
            
      const uiView = element(by.css('main ui-view'));

      function testState(url, componentName) {
        expect(browser.getLocationAbsUrl()).toBe(url);

				// Unwieldy way to get first child element
        const component = uiView.all(by.css('*')).first();
        expect(component.getTagName()).toEqual(componentName);                
      }

      testState('/stores/all', 'stores');
            
      const nav = element.all(by.css('a'));
      const addNewStore = nav.get(0);
      const list = element.all(by.css('li'));
      //first store in list
      const notAsAwesome = list.get(0);

      notAsAwesome.click();

      testState('/stores/585c664abe50100011c6c991/pets', 'store');

      const nav2 = element.all(by.css('button'));
      const backToStores = nav2.get(1);

      backToStores.click();

      testState('/stores/all', 'stores');
            
      addNewStore.click();

      testState('/stores/add', 'stores');

    });
  });
});
