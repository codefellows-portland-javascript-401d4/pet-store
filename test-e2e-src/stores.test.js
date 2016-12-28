import StoresPage from './stores-page';

describe('My Pet Store App', function() {

    const stores = new StoresPage();

    it('should have a title', function() {
        stores.get();
        expect(stores.title).toEqual('Pet Stores');
    });

    describe('navigation', function() {

        beforeEach(function() {
            stores.get();
        });

        it('defaults to welcome page', function() {

            expect(stores.url).toBe('/welcome');
            expect(stores.stateComponent).toEqual('welcome');

        });

    });

});
