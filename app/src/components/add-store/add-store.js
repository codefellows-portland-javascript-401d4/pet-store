import template from './add-store.html';
import styles from './add-store.scss';

export default {
  template, 
  controller,
  require: {
    parent: '^stores'
  },
  binding: {
    storeId: '<'
  }
};

// controller.$inject = ['$state'];

function controller() {
  this.styles = styles;

  this.reset = function() {
    this.name = '';
    this.address.street = '';
    this.address.city = '';
    this.address.state = '';
  };

  this.addStore = function() {
    this.parent.add({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    });
    this.reset();

    // $state.go('store', { id: this.parent.storeId });
  };
}