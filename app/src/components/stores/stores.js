import template from './stores.html';

export default {
  template,
  controller,
  bindings: {
    stores: '<'
  }
};

controller.$inject = ['storeService'];

function controller(stores) {

  this.addNew = () => {
    this.addStore({
      name: this.name,
      address: {
        street: this.street,
        city: this.city,
        state: this.state
      }
    });
  };

  this.addStore = store => {
    stores.add(store)
      .then(saved => {
        this.stores.push(saved);
      });
  };
}