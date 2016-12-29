import template from './add-store.html';

export default {
    template,
    require: {
        storesController: '^stores'
    },
    controller
};

controller.$inject = ['storeService', '$state'];

function controller(Store, $state) {

    this.$onInit = function() {
        this.stores = this.storesController.stores;
    };

    this.add = function () {

        if (!this.newStore) return;
        new Store (this.newStore).$save()
            .then(store => this.stores.push(store))
            .catch(console.error);

        this.newStore = '';

        $state.go('stores.all');

    };

    this.cancel = function() {
        this.newStore = '';
        $state.go('stores.all');
    };
}