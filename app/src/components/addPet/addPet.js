import template from './addPet.html';

export default {
  template,
  controller,
  bindings: {
    store: '<'
  }
};

controller.$inject = ['petService'];

function controller (pets) {
  this.reset = () => {
    this.name = '';
    this.animal = '';
  };

  this.$onInit = () => {
    this.reset();
  };

  this.addNew = () => {
    this.addPet({
      name: this.name,
      animal: this.animal,
      store: this.store._id
    });
    this.reset();
  };

  this.addPet = pet => {
    pets.add(pet)
      .then(saved => {
        this.store.pets.push(saved);
      })
      .catch(err => console.log(err));
  };
}