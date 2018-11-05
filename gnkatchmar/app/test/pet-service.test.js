describe( 'pet service', () => {
  const { assert } = chai;

  beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );
    
  let $httpBackend = null, petService = null;
    
  beforeEach(angular.mock.inject((_petService_, _$httpBackend_ ) => {
    $httpBackend = _$httpBackend_;
    petService = _petService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it( 'get pets', done => {
    const pets = ['Test Pet', 'cat'];
        
    $httpBackend
            .expectGET('/api/pets')
            .respond(pets);

    petService.get()
            .then(allStores => {
              assert.deepEqual(allStores, pets);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });


  it('add pet', done => {

    const pet = {
      name: 'Test Pet 2',
      animal: 'dog'
		 };
        
    $httpBackend
            .expectPOST('/api/pets', pet)
            .respond(pet);

    petService.add(pet)
            .then(savedStore => {
              assert.deepEqual(savedStore, pet);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });

});