const {assert} = chai;

describe('pet store testing', () => {
    
    beforeEach(angular.mock.module('services', {apiUrl: '/api'}));
    
    let $httpBackend = null, storeService = null;

    beforeEach(angular.mock.inject((_storeService_, _$httpBackend_) => {
        storeService = _storeService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(() => {
        //Go back and look at this
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    // TODO: get all these tests done and working
    it('gets all stores', done => {
        const stores = [1,2,3];

        $httpBackend
            .expectGET('/api/stores')
            .respond(stores);

        storeService
            .query()
            .then(savedStores => {
                assert.isEqual(savedStores.length, 3);
                assert.deepEqual(savedStores, stores);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    // it('add store', done => {
    //     const newPet = {
    //         name: 'Qux',
    //         animal: 'cat'
    //     };

    //     $httpBackend
    //         .expectPOST('/api/pets')
    //         .respond(newPet);

    //     petService
    //         .add(newPet)
    //         .then(savedPet => {
    //             assert.deepEqual(savedPet, newPet);
    //             done();
    //         })
    //         .catch(done);

    //     $httpBackend.flush();
    // });

    // it('removes store', done => {
    //     const newPet = {
    //         name: 'Qux',
    //         animal: 'cat',
    //         id: '12345'
    //     };
    //     const id = '12345';

    //     $httpBackend
    //         .expectDELETE(`/api/pets/${id}`)
    //         .respond(newPet);

    //     petService
    //         .remove(id)
    //         .then(delPet => {
    //             assert.deepEqual(delPet, newPet);
    //             done();
    //         })
    //         .catch(done);

    //     $httpBackend.flush();
    // });
});