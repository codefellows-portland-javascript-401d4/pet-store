/* globals angular, chai */

const { assert } = chai;


describe('add-pet component', () => {

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

  let newPet = {
    name: 'Nemo',
    animal: 'fish',
    store: 123456789
  };

  // mock the service to use in tests
  const storeService = {
    addPet(pet) {
      storeList[0].pets.push(pet);
      return Promise.resolve(pet);
    }
  };

  // mock the state service
  const $state = {};
  // empty mock of the add-stores component
  let addPet = null;

  beforeEach(angular.mock.inject($componentController => {
    addPet =
      $componentController('addPet', { storeService, $state }, { storeList });
  }));

  it('has a pet list', done => {
    setTimeout(() => {
      assert.deepEqual(addPet.storeList[0].pets, [{name: 'Dory', animal: 'fish'}] );
      done();
    });
  });

  it('adds a new pet to the pets in the storeList', done => {

    addPet.name = 'Nemo';
    addPet.type = 'fish';
    addPet.id = 123456789;
    addPet.addPet();

    setTimeout(() => {
      assert.equal(addPet.storeList[0].pets.length, 2);
      assert.deepEqual(addPet.storeList[0].pets[1], newPet);
      done();
    });
  });

});