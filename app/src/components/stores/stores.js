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
    const street = this.street;
    const city = this.city;
    const state = this.state;
    this.addStore({
      name: this.name,
      address: {
        street,
        city,
        state
      },
    });
  };

  this.addStore = store => {
    stores.add(store)
      .then(saved => {
        this.stores.push(saved);
      });
  };
}