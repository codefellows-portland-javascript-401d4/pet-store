
describe('handles REST calls from main stores controller', () => {
  const { assert } = chai;



  // mock up services module where service to be tested is defined
  // use pseudo-window arg to dispel phantom 'Some of your tests did a full page reload!' error
  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' }/*, {$window: { location: {href: '' }}}*/)

  );

  let $httpBackend = null, storesService = null;

  beforeEach(
    angular.mock.inject((_storesService_, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;
      storesService = _storesService_;

    })
  );

  afterEach(() => {

    // make sure any mock REST cycles initiated 
    // by tests have completed
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();

  });
  
  it('completes get request to storesService', done => {

    const stores = ['foo', 'bar', 'baz'];

    $httpBackend
      .expectGET( '/api/stores' )
      .respond( stores );

    storesService.getStores()
      .then(allStores => {
        // must deepEqual to compare orig. mock data with 
        // $httpBackend-serialized mock res
        assert.deepEqual( allStores, stores );
        done();

      })
      .catch( done );

    // tell $httpBackend to start sending any res data so far  
    $httpBackend.flush();

  });

  it('completes add request to storesController', done => {

    const store = { 
      name: 'Birdies R Us', 
      address: {
        street: '123 Street St',
        city: 'myCity',
        state: 'greatState'

      } 
    };

    $httpBackend
      .expectPOST( '/api/stores', store )
      .respond( store );

    storesService.add( store )
      .then(savedStore => {
        assert.deepEqual( savedStore, store );
        done();
        
      })
      .catch(done);

    $httpBackend.flush();

  });
});