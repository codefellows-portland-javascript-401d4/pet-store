describe ('petsService', () => {

  const { expect } = chai;

  let petsService = null;
  let $httpBackend = null;

  beforeEach(angular.mock.module('services', { apiUrl: '/api/unauth' }));

  beforeEach(angular.mock.inject(function(_petsService_, _$httpBackend_) {
    petsService = _petsService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const pets = [ 0, 1, 2 ];

  const pet = [ 3 ];

  it ('gets list of pets', (done) => {
    $httpBackend
      .expectGET('/api/unauth/pets')
      .respond(pets);

    petsService.getAll()
      .then((allPets) => {
        expect(allPets).to.deep.equal(pets);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('adds a pet', (done) => {
    $httpBackend
      .expectPOST('/api/unauth/pets', pet)
      .respond(pet);

    petsService.add(pet)
      .then((saved) => {
        expect(saved).to.deep.equal(pet);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('removes a pet', (done) => {
    $httpBackend
      .expectDELETE('/api/unauth/pets/1')
      .respond(pet);

    petsService.remove(1)
      .then((removed) => {
        expect(removed).to.deep.equal(pet);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('gets a specific pet', (done) => {
    $httpBackend
      .expectGET('/api/unauth/pets/1')
      .respond(pet);

    petsService.get(1)
      .then((retrieved) => {
        expect(retrieved).to.deep.equal(pet);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('get without an id returns all pets', (done) => {
    $httpBackend
      .expectGET('/api/unauth/pets')
      .respond(pets);

    petsService.get()
      .then((retrieved) => {
        expect(retrieved).to.deep.equal(pets);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});