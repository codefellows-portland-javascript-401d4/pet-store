import template from './newStore.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {
  this.addNew = () => {
    this.add({
      name: this.name,
      address: {
        street: this.street,
        city: this.city,
        state: this.state
      },
    });
  };
}