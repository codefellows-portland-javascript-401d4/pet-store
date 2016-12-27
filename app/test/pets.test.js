describe( 'pets component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const pets = [
        { name: 'Test Pet 1', animal: 'cat' },
        { title: 'Test Pet 2', animal: 'dog' }
    ];

    const pet = { title: 'Test Pet 3', animal: 'bird' };
    const _id = 123;
    
    const petService = {
      get() {
        return Promise.resolve(pets);
      },
      add(pet) {
        pet._id = _id;
        return Promise.resolve(pet);
      }
    };

    let component = null;
    before(() => {
      component = $component('pets', { petService });
    });

    it( 'loads pets', done => {
      setTimeout(() => {
        assert.equal(component.pets, pets);
        done();
      });
    });

    it( 'add an pet', done => {

      component.add(pet);

      setTimeout(() => {
        assert.equal(pets.length, 3);
        assert.equal(pets[2], pet);
        done();
      });
    });

  });

}); 