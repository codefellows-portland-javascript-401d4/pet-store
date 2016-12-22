import template from './store-add.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

controller.$inject = ['storeService'];

function controller() {

  this.reset = () => {
    this.name = '';
    this.address.street = '';
    this.address.city = '';
    this.address.state = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
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