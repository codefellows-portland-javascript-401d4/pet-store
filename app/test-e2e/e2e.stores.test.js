describe('Stores Page', () => {

  it('should have the correct title', () => {
    browser.get('#!/stores/all');
    expect(browser.getTitle()).toEqual('Pet Stores');
  });
    
  describe('navigation', () => {

    it('defaults to /stores/all', () => {
            
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
            
      addNewStore.click();

      testState('/stores/add', 'stores');

    });
  });
});
