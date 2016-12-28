
describe('store service', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('services', {apiUrl: '/api'}));

  let $httpBackend = null, storeService = null;

  before(angular.mock.inject((_storeService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    storeService = _storeService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets stores', done => {

    const stores = [1,2,3];

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

    const store = {name: 'Pet Store 1'};

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

});
