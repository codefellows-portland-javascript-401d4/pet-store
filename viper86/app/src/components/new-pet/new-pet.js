import template from './new-pet.html';

export default {
  template,
  bindings: {
    store: '<'
  },
  require: {
    parent: '^store'
  },
  controller
};

controller.$inject = ['$state'];

function controller() {

  this.clearFields = () => {
    this.name = '';
    this.animal = '';
  };

  this.addPet = () => {
    this.parent.add({
      name: this.name,
      animal: this.animal,
      store: this.store._id
    });
    this.clearFields();
  };

}