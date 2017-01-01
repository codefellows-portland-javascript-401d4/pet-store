const {assert} = chai;

describe('addStores component', done => {
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let storeList = [
    {
      name: 'Test Store',
      address: {
        street: 'test street',
        city: 'Seattle',
        state: 'WA'
      },
      pets: [
        {
          name: 'Raj',
          animal: 'cat'
        }
      ],
      _id: 123456789
    }];

  let secondStore = {
    name: 'Second Test Store',
    address: {
      street: 'test 2 street',
      city: 'Seattle',
      state: 'WA'
    },
    _id: 191919191
  };

  const _id = 191919191;

  const storeService = {
    addStore(store) {
      store._id = _id;
      storeList.push(store);
      return Promise.resolve(store);
    }
  };

  const $state = {};
  let addStore = null;

  beforeEach(angular.mock.inject($componentController => {
    addStore = $componentController('addStore',
    {storeService, $state},
    {storeList});
  }));

  it('contains store list', done => {
    setTimeout(() => {
      assert.deepEqual(addStore.storeList, storeList);
      done();
    });
  });

  it('adds new store', done => {
    addStore.name = 'Store Two';
    addStore.address = {
      street: 'Street',
      city: 'Seattle',
      state: 'WA'
    };
    addStore.addStore();

    setTimeout(() => {
      assert.equal(addStore.storeList.length, 2);
      assert.deepEqual(addStore.storeList[1], secondStore);
      done();
    });
  });
});