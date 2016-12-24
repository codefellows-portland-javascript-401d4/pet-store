import template from './stores-add.html';

export default {
  template,
  bindings: {
    add: '<',
    stores: '<',
  },
  controller
};

controller.$inject = ['storeService'];

function controller() {

  this.reset = () => {
    this.name = '';
    this.address = {};
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


