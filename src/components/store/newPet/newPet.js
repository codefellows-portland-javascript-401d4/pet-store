import template from './newPet.html';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller
};

controller.$inject = ['petService'];

function controller(petService) {

  this.types = ['cat', 'lizard', 'bird', 'dog', 'fish'];

  this.add = () => {
    petService.add({
      name: this.name,
      animal: this.selectedType,
      store: this.store._id,
    })
      .then(saved => {
        console.log('Pet added: ', saved);
      })
      .catch(err => {
        console.log('add pet catch', err);
      });
  };

}