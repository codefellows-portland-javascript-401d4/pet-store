import template from './stores-store.html';

export default {
  template,
  bindings: {
    id: '<',
    store: '<'
  },
  controller

};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  this.$onInit = () => {
    console.log('this.id: ', this.id);
    stores.get(this.id)
    .then(store => {
      this.store = store;
      console.log('store in stores-store: ', this.store);
    });

  };
}