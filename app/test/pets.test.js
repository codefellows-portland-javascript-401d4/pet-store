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
    const name = 'pet name';
    const type = 'lizard';
    addPet.name = name;
    addPet.type = type;
    addPet.addNew();
    assert.deepEqual(newPet, {name, type});
  });
});