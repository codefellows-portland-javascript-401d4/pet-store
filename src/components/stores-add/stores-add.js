import template from './stores-add.html';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller,
  controllerAs: '$storesAdd'
};

controller.$inject = ['storeService', '$state'];

function controller(stores, $state) {

  this.addStore = () => {
    stores.addStore({
      name: this.name,
      address: {
        street: this.street,
        city: this.city,
        state: this.state
      }
    })
    .then(saved => {
      const savedId = saved._id;
      this.stores.push(saved);
      $state.go('store', {id: savedId});
    });

  };
}