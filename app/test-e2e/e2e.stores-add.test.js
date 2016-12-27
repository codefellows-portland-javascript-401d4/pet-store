describe('by model', () => {
  it('verify text input model', () => {
    browser.get('#!/stores/add');
    const storeName = element(by.model('$ctrl.name'));
    storeName.sendKeys('Store Name');

    const name = element(by.binding('storeName'));

    expect(name.getAttribute('value')).toEqual('Store Name');
  });

  describe('navigation', () => {

    it('goes back to /stores/all', () => {
            
      const uiView = element(by.css('main ui-view'));

      function testState(url, componentName) {
        expect(browser.getLocationAbsUrl()).toBe(url);

				// Unwieldy way to get first child element
        const component = uiView.all(by.css('*')).first();
        expect(component.getTagName()).toEqual(componentName);                
      }
            
      const nav = element.all(by.css('button'));
      const goBack = nav.get(1);
            
      goBack.click();

      testState('/stores/all', 'stores');

    });
  });
});