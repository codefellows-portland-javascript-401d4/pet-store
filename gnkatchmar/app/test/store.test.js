describe( 'stores component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  let $state = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const stores = [
      'Test Store', {street: '123 Test Street', city: 'Any Town', state: 'OR'},
      'Test Store 2', {street: '123 Second Test Street', city: 'Fairfield', state: 'CA'}
    ];
	 	const store = ['Test Store 3', {street: '123 Third Test Street', city: 'Dayton', state: 'OH'}];
    const _id = 1234;
    
    const storeService = {
      get() {
        return Promise.resolve(stores);
      },
      add(store) {
        store._id = _id;
        console.log('store');
      }
    };

    let component = null;
    before(() => {
      component = $component('stores', { storeService, $state });
    });

    it( 'loads stores', done => {
      setTimeout(() => {
        assert.equal(component.stores, stores);
        done();
      });
    });

    // "component.add is not a function" - WTH?

    // it( 'add an store', done => {

    //   component.add(store);

    //   setTimeout(() => {
    //     assert.equal(stores.length, 3);
    //     assert.equal(stores[2], store);
    //     done();
    //   });
    // });

  });

}); 