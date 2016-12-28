const { assert } = chai;

describe( 'add pets component', () => {

    angular.mock.module.sharedInjector();
    const mockModule = angular.mock.module('components');
    before(mockModule);
    
    let addPets = null;
    let store = {
        _id: 56789,
        pets: [
            {
                name: 'henry',
                animal: 'dog'
            },
            {
                name: 'fred',
                animal: 'dog'
            }
        ]
    };

    const pet = {
        name: 'tommy',
        animal: 'dog',
        store: 56789
    };

    const _id = 12345;

    const petService = {

        add(newPet) {
            newPet._id = _id;
            return Promise.resolve(newPet);
        }

    };

    const $state = {};

    const injectComponent = angular.mock.inject($componentController => {
        addPets = $componentController('addPets', { petService, $state }, { store });
    });
    before(injectComponent);

    it('calls the add function with property data', done => {
        const name = 'tommy';
        const animal = 'dog';
        addPets.name = name;
        addPets.animal = animal;
        addPets.store._id = store._id;
        addPets.addPet();

        setTimeout(() => {
            pet._id = _id;          
            assert.equal(store.pets.length, 3);
            assert.deepEqual(store.pets[2], pet);           
            done();
        });

    });

});
