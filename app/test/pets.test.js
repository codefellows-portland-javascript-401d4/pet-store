describe('pet component', () => {
  const {assert} = chai;
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let addPet = null;
  let newPet = null;

  const inject = angular.mock.inject(function($componentController) {
    addPet = $componentController(
      'addPet',
      {petService},
      {addPet(p) {newPet = p;}}
    );
  });
  const petService = {
    add(newPet) {
      return Promise.resolve(newPet);
    }
  };
  before(inject);

  it('call the add function with property data', () => {
    const name = 'name';
    const animal = 'animal';
    const store = {_id: '123id'};
    addPet.name = name;
    addPet.animal = animal;
    addPet.store = store;
    addPet.addNew();
    assert.deepEqual(newPet, {name, animal, store:store._id});
  });
});