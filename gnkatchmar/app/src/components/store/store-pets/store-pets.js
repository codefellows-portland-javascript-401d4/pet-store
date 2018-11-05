import template from './store-pets.html';

export default {
  template,
  bindings: { 
    store: '<'
  },
  controller
};

controller.$inject = ['$state'];

function controller($state) {

  this.goToAddPets = () => {
    $state.go('store.addPet');
  };

  this.backToAll = () => {
    $state.go('stores.all');
  };

}