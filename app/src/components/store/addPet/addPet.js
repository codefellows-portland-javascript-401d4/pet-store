import template from './addPet.html';

export default {
  template,
  controller,
  bindings: {
    store: '<',
  },
};

controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {
  this.options = ['cat', 'lizard', 'bird', 'dog', 'fish'];

  this.reset = function() {
    this.name = '';
    this.animal = '';
  };

  this.addPet = function() {
    storeService.addPet({
      name: this.name,
      animal: this.animal,
      store: this.store._id
    })
    .then(
      $state.go('store')
    );
  };
}