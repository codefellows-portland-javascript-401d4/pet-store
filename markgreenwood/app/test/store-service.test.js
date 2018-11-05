describe ('storeService', () => {

  const { expect } = chai;

  let storeService = null;
  let $httpBackend = null;

  beforeEach(angular.mock.module('services', { apiUrl: '/api/unauth' }));

  beforeEach(angular.mock.inject(function(_storeService_, _$httpBackend_) {
    storeService = _storeService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const stores = [ 0, 1, 2 ];

  const store = [ 3 ];

  it ('gets list of stores', (done) => {
    $httpBackend
      .expectGET('/api/unauth/stores')
      .respond(stores);

    storeService.getAll()
      .then((allStores) => {
        expect(allStores).to.deep.equal(stores);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('adds a store', (done) => {
    $httpBackend
      .expectPOST('/api/unauth/stores', store)
      .respond(store);

    storeService.add(store)
      .then((saved) => {
        expect(saved).to.deep.equal(store);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('removes a store', (done) => {
    $httpBackend
      .expectDELETE('/api/unauth/stores/1')
      .respond(store);

    storeService.remove(1)
      .then((removed) => {
        expect(removed).to.deep.equal(store);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('gets a specific store', (done) => {
    $httpBackend
      .expectGET('/api/unauth/stores/1')
      .respond(store);

    storeService.get(1)
      .then((retrieved) => {
        expect(retrieved).to.deep.equal(store);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('get without an id returns all stores', (done) => {
    $httpBackend
      .expectGET('/api/unauth/stores')
      .respond(stores);

    storeService.get()
      .then((retrieved) => {
        expect(retrieved).to.deep.equal(stores);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});