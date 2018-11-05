
describe('handles REST calls for pet instances from stores.store controller', () => {
  const { assert } = chai;

  // mock up services module where service to be tested is defined
  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})

  );

  let $httpBackend = null, petService = null;

  beforeEach(
    angular.mock.inject((_petService_, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      petService = _petService_;

    })
  );

  afterEach(() => {

    // make sure any mock REST cycles initiated 
    // by tests have completed
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();

  });
  
  it('completes get request to petController', done => {

    const pets = ['foo', 'bar', 'baz'];

    $httpBackend
      .expectGET( '/api/pets' )
      .respond( pets );

    petService.getPets()
      .then(allPets => {
        // must deepEqual to compare orig. mock data with 
        // $httpBackend-serialized mock res
        assert.deepEqual( allPets, pets );
        done();

      })
      .catch( done );

    // tell $httpBackend to start sending any res data so far  
    $httpBackend.flush();

  });

  it('completes add request to petController', done => {

    const pet = { 
      name: 'Miffy', 
      animal: 'lizard' 

    };

    $httpBackend
      .expectPOST( '/api/pets', pet )
      .respond( pet );

    petService.add( pet )
      .then(savedPet => {
        assert.deepEqual( savedPet, pet );
        done();
        
      })
      .catch(done);

    $httpBackend.flush();

  });
});