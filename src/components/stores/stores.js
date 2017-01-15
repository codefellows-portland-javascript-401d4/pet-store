import template from './stores.html';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller
};

controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {

  this.add = store => {
    storeService.add(store)
    .then(saved => {
      this.stores.push(saved);
      $state.go('store', { id: saved._id });
    })
    .catch();
  };
};