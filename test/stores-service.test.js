describe('Stores Service', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api'})
  );

  let $httpBackend = null, 
    storesService = null;

  beforeEach(angular.mock.inject((_storesService_, _$httpBackend_) => {
    storesService = _storesService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const stores = ['test1', 'test2', 'test3'];
  const newStore = ['newstore'];

  it('Gets all stores', done => {
    $httpBackend
      .expectGET('/api/stores')
      .respond(stores);

    storesService.getAll()
      .then(allStores => {
        assert.deepEqual(allStores, stores);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('Adds a store', done => {
    $httpBackend
      .expectPOST('/api/stores', newStore)
      .respond(newStore);

    storesService.add(newStore)
      .then(added => {
        assert.deepEqual(added, newStore);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('Gets a store by id', done => {
    $httpBackend
      .expectGET('/api/stores/1')
      .respond(newStore)

    storesService.get(1)
      .then(store => {
        assert.deepEqual(store, newStore);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});