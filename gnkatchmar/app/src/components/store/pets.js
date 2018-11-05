import template from './pets.html';

export default {
  template,
  controller   
};

controller.$inject = ['petService'];

function controller(pets) {

  pets.get().then(pets => {
    this.pets = pets;
  });

  this.add = pet => {
    pets.add(pet)
            .then(saved => {
              this.pets.push(saved);
            });
  };
}