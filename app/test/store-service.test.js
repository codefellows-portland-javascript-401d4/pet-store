describe('store service', () => {
  const {assert} = chai;
  beforeEach(
    angular.mock.module('services', {apiUrl: '/'})
  );

  let $httpBackend = null, storeService = null;

  beforeEach(angular.mock.inject((_storeService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    storeService = _storeService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets from database', done => {
    const store = {name: 'store'};
    $httpBackend
      .expectGET('')
      .respond(store);

    storeService.get()
      .then(stores => {
        assert.deepEqual(stores, store);
        done();
      })
      .catch(done);
    $httpBackend.flush();
  });

  it('adds to the database', done => {
    const newStore = {
      name: 'new store'
    };

    $httpBackend
      .expectPOST('')
      .respond(newStore);

    storeService.add(newStore)
      .then(saved => {
        assert.deepEqual(saved, newStore);
        done();
      })
      .catch(done);
    $httpBackend.flush();
  });
});