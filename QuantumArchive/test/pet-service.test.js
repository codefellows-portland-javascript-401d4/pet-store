const {assert} = chai;

describe('pet service testing', () => {
    
    beforeEach(angular.mock.module('services', {apiUrl: '/api'}));
    
    let $httpBackend = null, petService = null;

    beforeEach(angular.mock.inject((_petService_, _$httpBackend_) => {
        petService = _petService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(() => {
        //Go back and look at this
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('add pets', done => {
        const newPet = {
            name: 'Qux',
            animal: 'cat'
        };

        $httpBackend
            .expectPOST('/api/pets')
            .respond(newPet);

        petService
            .add(newPet)
            .then(savedPet => {
                assert.deepEqual(savedPet, newPet);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('removes pet', done => {
        const newPet = {
            name: 'Qux',
            animal: 'cat',
            id: '12345'
        };
        const id = '12345';

        $httpBackend
            .expectDELETE(`/api/pets/${id}`)
            .respond(newPet);

        petService
            .remove(id)
            .then(delPet => {
                assert.deepEqual(delPet, newPet);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });
});