import template from './new-pet.html';

export default {
  template,
  bindings:{
    add: '='
  },
  controller
};

function controller () {

  this.reset = () => {
    this.name = '';
    this.animal = '';
  };

  this.reset();

  this.addNew = () => {
    console.log('name', this.name);
    this.add({
      name: this.name,
      animal: this.animal
    })
    .then(saved => {
      this.animal.push(saved);
      this.reset();
    })
    .catch(err => {
      console.log('error in pets', err);
    });
  };
}