import template from './store.html';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller
};

controller.$inject = ['petService', '$state'];

function controller(petService, $state) {

  this.add = pet => {
    petService.add(pet)
    .then(saved => {
      this.store.pets.push(saved);
      $state.go('store.pets', { id: this.store._id });
    })
    .catch();
  };
};