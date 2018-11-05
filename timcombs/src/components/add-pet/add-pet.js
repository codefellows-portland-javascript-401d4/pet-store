import template from './add-pet.html';
import styles from './add-pet.scss';

export default {
  template,
  bindings: {
    stores: '<',
    store: '<'
  },
  controller,
  controllerAs: '$addPet'
};

controller.$inject = ['petService', '$state'];

function controller(pets, $state) {
  this.styles = styles;

  this.addPet = () => {
    pets.addPet({
      name: this.name,
      animal: this.animal,
      store: this.store._id
    })
    .then(saved => {
      const storeId = this.store._id;
      this.store.pets.push(saved);
      $state.go('store', {id: storeId});
    });

  };
}