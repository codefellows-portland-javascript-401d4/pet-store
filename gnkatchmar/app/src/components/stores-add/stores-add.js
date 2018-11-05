import template from './stores-add.html';

export default {
  template,
  bindings: {
    add: '<',
    stores: '<',
  },
  controller
};

controller.$inject = ['storeService', '$state'];

function controller(stores, $state) {

  this.backToStores = () => {
    $state.go('stores.all');
  };

  this.reset = () => {
    this.name = '';
    this.address = {};
  };

  this.reset();

  this.addStore = () => {
    stores.add({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    })
        .then(saved => {
          const newStoreId = saved._id;               
          this.stores.push(saved);
          $state.go('store', {id: newStoreId});
        });
  };
}


