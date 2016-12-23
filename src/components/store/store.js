import template from './store.html';

export default {
    template, 
    controller, 
    bindings: {
        id: '<'
    }
};

controller.$inject = ['storeService', 'petService', '$state'];

function controller(Store, Pet, $state) {

    this.$onInit = function() {
        Store.get({id: this.id }).$promise
            .then(store => this.store = store)
            .catch(console.log);
        console.log('fx ran');
    };

}