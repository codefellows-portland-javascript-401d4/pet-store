import template from './add-store.html';

export default {
    template,
    bindings: {
        stores: '='
    },
    controller
};
controller.$inject = ['storeService'];

function controller(storeService) {
    this.reset = () => {
        this.store = {};
    };

    this.reset();

    this.add = () => {
        console.log(this.store);
        storeService.add(this.store)
            .then(store => {
                this.stores.push(store);
                this.reset();
            });
    };
}