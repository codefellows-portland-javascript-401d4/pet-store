import template from './stores.html';

export default {
  template,
  controller,
  bindings: {
    stores: '<'
  }
};

controller.$inject = ['storeService', '$state'];

function controller(stores, $state) {

  this.$onInit = () => {
    const stores = this.stores;
    if(stores.length) {
      this.selected = stores[0]._id;
    }
  };

  this.setStore = () => {
    if(!this.selected) return;
    $state.go('store', { id: this.selected });
  };

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