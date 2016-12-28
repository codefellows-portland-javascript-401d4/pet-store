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

        it('defaults to stores/all page', function() {

            expect(stores.url).toBe('/stores/all');
            expect(stores.stateComponent).toEqual('stores');

        });

        it('navigates to the add store page', function() {

            stores.goToAddStore();

            expect(stores.url).toBe('/stores/add');
            expect(stores.stateComponent).toEqual('stores');

        });

    });

});
