import template from './store-new.html';

export default {
  template,
  bindings: {
    stores: '<',
    add: '<',
  },
  controller
};

controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {

  this.reset = () => {
    this.name = '';
    this.address.street = '';
    this.address.city = '';
    this.address.state = '';
  };

  this.addNew = () => {
    storeService.add({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    })
    .then(store => {
      this.stores.push(store);
      this.reset();
      $state.go('stores.detail', ({
        id: store._id,
        name: store.name
      }));
    });
  };

  this.cancel = () => {
    $state.go('stores.all');
  };
}