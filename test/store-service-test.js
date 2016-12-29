describe('store service', () => {
	const { assert } = chai;

	angular.mock.module.sharedInjector();

	before(angular.mock.module('services', { apiUrl: '/api' }));
    
	let $httpBackend = null, storeService = null;
    
	before(angular.mock.inject((_storeService_, _$httpBackend_ ) => {
		$httpBackend = _$httpBackend_;
		storeService = _storeService_;
	}));

	afterEach(() => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('gets stores', done => {
        // mock return data from image get
		const stores = [1, 2, 3];
        
        // set the expectation
		$httpBackend
            // what http VERB and url are we expecting?
            .expectGET('/api/stores')
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond(stores);

        // make the call against SUT
		storeService.get()
            .then(allStores => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
	assert.deepEqual(allStores, stores);
	done();
})
            .catch(done);

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
		$httpBackend.flush();
	});

	it('adds a store', done => {
		const store = {
		name: 'Pet Store',
		address: {
		street: '123 That St',
		city: 'Portland',
		state: 'OR'
	},
	};
  
		$httpBackend
            .expectPOST('/api/stores', store)
            .respond(store);

		storeService.add(store)
            .then(savedStore => {
	assert.deepEqual(savedStore, store);
	done();
})
            .catch(done);

		$httpBackend.flush();
	});

	it('deletes a store', done => {
		const store = {
		name: 'Pet Store',
		address: {
		street: '123 That St',
		city: 'Portland',
		state: 'OR'
	},
		id: 12345
	};
        
		$httpBackend
            .expectDELETE('/api/stores/12345')
            .respond(store);

		storeService.remove(store.id)
            .then(deletedStore => {
	assert.deepEqual(deletedStore, store);
	done();
})
            .catch(done);

		$httpBackend.flush();
	});

});
