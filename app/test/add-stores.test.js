/* globals angular, chai */

const { assert } = chai;


describe('add-stores component', () => {

  // mock the components modules
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  // mock the data to be used in tests
  let storeList = [ { name: 'Store One',
    address: {
      street: '1234 Main St',
      city: 'Portland',
      state: 'Oregon'
    },
    pets: [ {name: 'Dory', animal: 'fish' } ],
    _id: 123456789
  }];

  let newStore = {
    name: 'Store Two',
    address: {
      street: '1236 Main St',
      city: 'Portland',
      state: 'Oregon'
    },
    pets: [ {name: 'Felix', animal: 'cat' } ],
  };

  const _id = 987654321;

  // mock the service to use in tests
  const storeService = {
    add(store) {
      store._id = _id;
      return Promise.resolve(store);
    }
  };

  // mock the state service
  const $state = {};
  // empty mock of the add-stores component
  let addStore = null;

  beforeEach(angular.mock.inject($componentController => {
    addStore =
      $componentController('addStore', { storeService, $state }, { storeList });
  }));

  it('has a store list', done => {
    setTimeout(() => {
      assert.deepEqual(addStore.storeList, storeList);
      done();
    });
  });


});