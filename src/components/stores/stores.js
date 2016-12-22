import template from './stores.html';

export default {
    template,
    controller
};

controller.$inject = ['storeService'];

function controller(storeService) {
    this.stores = storeService.query();
}