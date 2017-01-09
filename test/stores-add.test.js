
describe('test UI add stores component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const store = { 
    name: 'Birdies R Us', 
    address: {
      street: '123 Street St',
      city: 'myCity',
      state: 'greatState'

    } 
  };
  
  function isReset(component) {
    assert.equal( component.name, '' );
    assert.deepEqual(component.address, {
      street: '',
      city: '',
      state: ''

    });
  }

  describe('calls "stores"\'s add() fn', () => {

    it('starts with store keys unassigned', () => {
      const component = $component( 'storesAdd', {} );
      isReset( component );

    });


    it('calls stores.add( store )', () => {
      const component = $component( 'storesAdd', {} );
      
      component.name = 'Birdies R Us';
      component.address =  {
        street: '123 Street St',
        city: 'myCity',
        state: 'greatState'

      };
      
      let result = null;
      component.parent = {add: (obj) => { 
        return result = obj;} 
        
      };

      component.addStore();

      assert.deepEqual( result, store );

    });    
    
    it('calls stores.reset()', () => {
      const component = $component( 'storesAdd', {} );
      
      component.name = 'Birdies R Us';
      component.address =  {
        street: '123 Street St',
        city: 'myCity',
        state: 'greatState'

      };
      
      component.reset();

      isReset( component );

    });
  });
});
