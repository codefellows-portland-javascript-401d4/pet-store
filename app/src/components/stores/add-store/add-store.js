import template from './add-store.html';

export default {
    template,
    bindings: {
        stores: '<'
    },
    controller
};
controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {
    this.reset = () => {
        this.store = {};
    };

    this.newStores = [];

    this.reset();

    this.add = () => {
        storeService.add(this.store)
            .then(store => {
                this.stores.push(store);
                this.reset();
                return store;
            })
            .then(store => {
                $state.go('store', {id: store._id});
            });
    };
}