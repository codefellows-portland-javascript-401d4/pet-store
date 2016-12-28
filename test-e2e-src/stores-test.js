import StoresPage from './stores-page';

const stores = new StoresPage;

describe('stores page', () => {

    it('should have a title', function() {
        stores.get();
        expect(stores.title).toBeOk;
    });

});