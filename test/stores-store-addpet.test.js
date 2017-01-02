
describe('test UI stores.store.addpet component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const pet = { 
    name: 'Miffy',
    animal: 'lizard',
    store: 5 
    
  };

  function isReset(component) {
    assert.equal( component.name, '' );
    assert.equal( component.animal, '' );
  }

  describe('calls stores.store\'s addPet() fn', () => {

    it('starts with pet keys unassigned', () => {
      const component = $component( 'storesStoreAddpet', {} );
      isReset( component );
    });

    it('executes stores.store.addpet( pet )', () => {
      const component = $component('storesStoreAddpet', {});
      
      component.store = 5;
      component.name = 'Miffy';
      component.animal = 'lizard';
      
      let result = null;
      component.parent = {
        addPet: obj => result = obj,
        store: {
          _id: 5
        }
      };

      component.addpet();

      assert.deepEqual( result, pet );

    });    
    
    it('calls stores.store.addpet.reset()', () => {
      const component = $component('storesStoreAddpet', {});
      
      component.store = 5;
      component.name = 'Miffy';
      component.animal = 'lizard';
      
      component.reset();

      isReset( component );

    });
  });
});
