describe( 'store service', () => {
  const { assert } = chai;

  beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );
    
  let $httpBackend = null, storeService = null;
    
  beforeEach(angular.mock.inject((_storeService_, _$httpBackend_ ) => {
    $httpBackend = _$httpBackend_;
    storeService = _storeService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it( 'get stores', done => {
    const stores = ['Test Store', {street: '123 Test Street', city: 'Any Town', state: 'TT'}];
        
    $httpBackend
            .expectGET('/api/stores')
            .respond(stores);

    storeService.get()
            .then(allStores => {
              assert.deepEqual(allStores, stores);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });


  it('add store', done => {

    const store = {
      name: 'Test Store 2',
      address: {
        street: '123 2nd Test Street',
        city: 'Testville',
        state: 'XX'
      }    
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

  it('removes store', done => {

    const store = {
      id: '123'
    };
        
    $httpBackend
            .expectDELETE('/api/stores/123')
            .respond(store);

    storeService.remove(store.id)
            .then(removedStore => {
              assert.deepEqual(removedStore, store);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });

});