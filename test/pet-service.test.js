describe('pet service', () => {
    const { assert } = chai;

    angular.mock.module.sharedInjector();


    // we need to mock the services module, that's were
    // image service lives
    before(angular.mock.module('services', { apiUrl: '/api' }));
    
    let $httpBackend = null, petService = null;
    
    before(angular.mock.inject((_petService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        petService = _petService_;
    }));

    afterEach(() => {
        // make sure the $httpBackend expectations that we set up
        // have actually happened
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets pets', done => {
        // mock return data from image get
        const pets = [1, 2, 3];
        
        // set the expectation
        $httpBackend
            // what http VERB and url are we expecting?
            .expectGET('/api/pets')
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond(pets);

        // make the call against SUT
        petService.get()
            .then(allPets => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
                assert.deepEqual(allPets, pets);
                done();
            })
            .catch(done);

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
        $httpBackend.flush();
    });

    it('adds a pet', done => {
        const pet = { 
            name: 'henry',
            animal: 'dog',
        };
  
        $httpBackend
            .expectPOST('/api/pets', pet)
            .respond(pet);

        petService.add(pet)
            .then(savedPet => {
                assert.deepEqual(savedPet, pet);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('deletes a pet', done => {
        const pet = { 
            name: 'henry',
            animal: 'dog',
            id: 12345
        };
        
        $httpBackend
            .expectDELETE('/api/pets/12345')
            .respond(pet);

        petService.remove(pet.id)
            .then(deletedPet => {
                assert.deepEqual(deletedPet, pet);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

});
