describe('Pet Service', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api'})
  );

  let $httpBackend = null, 
    petService = null;

  beforeEach(angular.mock.inject((_petService_, _$httpBackend_) => {
    petService = _petService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const newPet = ['mipsy'];

  it('Adds a pet', done => {
    $httpBackend
      .expectPOST('/api/pets', newPet)
      .respond(newPet);

    petService.add(newPet)
      .then(added => {
        assert.deepEqual(added, newPet);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});