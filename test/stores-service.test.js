describe('Stores Service', () => {
  const { expect } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api'})
  );

  let $httpBackend = null, 
    albumService = null;

  beforeEach(angular.mock.inject((_albumService_, _$httpBackend_) => {
    albumService = _albumService_;
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
      .expectGet('')
  });

});