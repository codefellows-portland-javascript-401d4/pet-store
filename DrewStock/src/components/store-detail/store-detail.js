import template from './store-detail.html';

export default {
  template,
  bindings: {
    store: '<',
    id: '<',
    name: '<'
  },
  controller
};

controller.$inject = ['storeService'];

function controller(stores) {

  this.$onInit = () => {
    stores.get(this.id).then(store => {
      this.store = store;
    });
  };

}
