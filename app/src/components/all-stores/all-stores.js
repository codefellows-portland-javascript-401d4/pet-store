import template from './all-stores.html';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller
};

controller.$inject = ['$state'];

function controller($state) {

  this.goToStore = storeId => {
    $state.go('store.pets', { id: storeId });
  };
}