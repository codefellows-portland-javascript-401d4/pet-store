import template from './newPet.html';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller
};

controller.$inject = ['petService', '$state'];

function controller(petService, $state) {

  this.types = ['cat', 'lizard', 'bird', 'dog', 'fish'];

  this.reset = () => {
    this.name = '';
    this.selectedType = '';
  };

  this.add = () => {
    petService.add({
      name: this.name,
      animal: this.selectedType,
      store: this.store._id,
    })
      .then(saved => {
        this.store.pets.push(saved);
        console.log('Pet added: ', saved);
      })
      .catch(err => {
        console.log('add pet catch', err);
      });
    this.reset();
    $state.go('store.pets', {id: this.store._id});
  };

}