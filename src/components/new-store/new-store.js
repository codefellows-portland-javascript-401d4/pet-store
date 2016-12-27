import template from './new-store.html';

export default {
  template,
  bindings: {
    add: '<',
  },
  controller
};

function controller() {

  this.reset = () => {
    this.name = '';
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
