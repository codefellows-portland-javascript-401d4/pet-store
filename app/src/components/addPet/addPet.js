import template from './addPet.html';

export default {
  template,
  controller
};

function controller() {
  this.options = ['Cat', 'Lizard', 'Birb', 'Dog', 'Fish'];

  this.reset = function() {
    this.name = '';
    this.animal = '';
  };

  this.addPet = function() {
    this.parent.add({
      name: this.name,
      animal: this.animal
    });
    this.reset();
  };
}