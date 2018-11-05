
describe('stores component', () => {
  const {assert} = chai;
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let stores = null;
  let newStore = null;


  const inject = angular.mock.inject(function($componentController){
    stores = $componentController(
      'addStore',
      {storeService, $state},
      {addStore(s) {newStore = s;}}
    );
  });
  const $state = {
    go() {
      return true;
    }
  };

  const storeService = {
    add(newStore) {
      return Promise.resolve(newStore);
    }
  };
  before(inject);

  it('calls the add function with property data', () => {
    const name = 'store';
    const street = 'street';
    const city = 'city';
    const state = 'state';
    const address = {};
    stores.street = street;
    stores.city = city;
    stores.state = state;
    stores.name = name;
    stores.address = address;
    stores.addNew();
    assert.deepEqual(newStore, {name, address: {street, city, state}});
  });
});