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
        console.log('Pet added: ', saved);
      })
      .catch(err => {
        console.log('add pet catch', err);
      });
    this.reset();
  };

}