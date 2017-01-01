const {assert} = chai;

describe('addPet component', () => {
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

  const storeService = {
    addPet(pet) {
      storeList[0].pets.push(pet);
      return Promise.resolve(pet);
    }
  };


  beforeEach(angular.mock.inject($componentController => {
    addPet = 
    $componentController('addPet', 
    {storeService, $state},
    {storeList});
  }));

  const $state = {
    go: function() {}
  };

  let addPet = null;

  it('receives pets', done => {
    setTimeout(() => {
      assert.deepEqual(addPet.storeList[0].pets,
        [{
          name: 'Raj',
          animal: 'cat',
        }]);
      done();
    });
  });
  
  it('adds a new pet', done => {
    
    console.log(addPet);
    console.log(addPet.storeList[0].pets);
    addPet.name = 'Ruby',
    addPet.animal = 'cat',
    addPet._id = 123456789;
    addPet.addPet();

    console.log(addPet.storeList[0].pets[1]);

    setTimeout(() => {
      assert.equal(addPet.storeList[0].pets.length, 2);
      assert.deepEqual(addPet.storeList[0].pets[1], {
        name: 'Ruby',
        animal: 'cat',
        store: 123456789
      });
      done();
    });
  });
});