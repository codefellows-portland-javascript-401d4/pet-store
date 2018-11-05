import template from './new-store.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  require: {
    parent: '^stores'
  },
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  
  this.clearFields = () => {
    this.name = '';
    this.address.street = '';
    this.address.city = '';
    this.address.state = '';
  };

  this.addStore = () => {
    this.parent.add({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    });
    $state.go('stores');
    this.clearFields();
  };
}