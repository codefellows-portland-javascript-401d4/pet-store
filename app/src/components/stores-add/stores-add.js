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

  this.backToAll = () => {
    $state.go('stores.all');
  };

  this.reset = () => {
    this.name = '';
    this.address = {};
  };

  this.reset();

  this.addNew = () => {
    stores.add({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    });
    this.reset();
  };
}


