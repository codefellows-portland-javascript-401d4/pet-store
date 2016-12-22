
describe('stores component', () => {
  const {assert} = chai;
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let stores = null;
  let newStore = null;


  const inject = angular.mock.inject(function($componentController){
    stores = $componentController(
      'stores',
      {storeService},
      {stores(s) {newStore = s;}}
    );
  });
  const storeService = {
    add(newStore) {
      return Promise.resolve(newStore);
    }
  };
  before(inject);

  it('calls the add function with property data', () => {
    const name = 'store';
    const address = {
      street: 'street',
      city: 'city',
      state: 'state'
    };
    stores.name = name;
    stores.address = address;
    stores.addNew();
    assert.deepEqual(newStore, {name, address});
  });
});