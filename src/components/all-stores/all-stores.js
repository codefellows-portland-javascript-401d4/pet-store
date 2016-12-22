import template from './all-stores.html';

export default {
    template, 
    require: {
        storesController: '^stores'
    },
    controller
};

function controller() {
    //TODO: should this be moved to resolve in router?
    this.$onInit = function() {
        this.stores = this.storesController.stores;
    };
}