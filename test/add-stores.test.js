const { assert } = chai;

describe( 'add stores component', () => {

    angular.mock.module.sharedInjector();
    const mockModule = angular.mock.module('components');
    before(mockModule);
    
    let addStores = null;
    let stores = [
        {
            _id: 12345, 
            name: 'First Pet Store',
            address: {
                street: '123 This St',
                city: 'Portland',
                state: 'OR'
            }
        },
        {
            _id: 56789, 
            name: 'Second Pet Store',
            address: {
                street: '456 That St',
                city: 'Portland',
                state: 'OR'
            }
        }
    ];

    const store = { 
        name: 'Third Pet Store',
        address: {
            street: '789 The Other St',
            city: 'Portland',
            state: 'OR'
        }
    };

    const _id = 12345;

    const storeService = {

        add(newStore) {
            newStore._id = _id;
            return Promise.resolve(newStore);
        }

    };

    const $state = {};

    const injectComponent = angular.mock.inject($componentController => {
        addStores = $componentController('addStores', { storeService, $state }, { stores });
    });
    before(injectComponent);

    it('calls the add function with property data', done => {
        const name = 'Third Pet Store';
        const street = '789 The Other St';
        const city = 'Portland';
        const state = 'OR';
        addStores.name = name;
        addStores.street = street;
        addStores.city = city;
        addStores.state = state; 
        addStores.addStore();

        setTimeout(() => {
            store._id = _id;          
            assert.equal(stores.length, 3);
            assert.deepEqual(stores[2], store);           
            done();
        });

    });

});
