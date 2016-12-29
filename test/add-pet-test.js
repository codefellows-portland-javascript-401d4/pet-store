const {assert} = chai;

describe('add-pet-component', () => {
    //mock services
    const petService = function (obj) {
        this.name = obj.name;
        this.animal = obj.animal;
        this._id = 'ABC';
        this.store = obj.store;
    };

    petService.prototype.$save = function() {return Promise.resolve(this);};

    const $state = {
        go: function(str, obj) {return;}
    };

    angular.mock.module.sharedInjector();

    const mock = angular.mock.module('components');

    before(mock);

    //declare needed vars
    let addPet = null;

    //declare bindings
    let id = '123';
    let store = {pets: []};

    const injectComponent = angular.mock.inject($componentController => {
        addPet = $componentController('addPet', {petService, $state} /* mocked services */, {id, store} /*bindings*/); 
    });

    before(injectComponent);

    function testEmpty() {
        addPet.newPet = {};
        assert.isNotOk(addPet.newPet.name);
        assert.isNotOk(addPet.newPet.animal);
    }
    it('defaults an empty newPet', testEmpty);

    it('calls addPet with property data', done => {
        const name = 'Millie';
        const animal = 'dog';

        addPet.newPet.name = name;
        addPet.newPet.animal = animal;

        Promise.resolve(addPet.addPet())
            .then( () => {
                var actual = addPet.store.pets[0];
                assert.equal(actual.name, name);
                assert.equal(actual.animal, animal);
                assert.equal(actual.store, '123');
                assert.equal(actual._id, 'ABC');
                
                done();
            })
            .catch(done);


    });

    it('resets', testEmpty);
});