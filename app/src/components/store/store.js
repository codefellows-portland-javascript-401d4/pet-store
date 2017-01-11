import template from './store.html';
import styles from './store.scss';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller
};

controller.$inject = [ 'petsService', '$state' ];

function controller(petsService, $state) {
  this.styles = styles;

  this.add = (pet) => {
    console.log('Adding pet ', pet);
    this.loading = true;
    petsService.add(pet)
      .then(saved => {
        this.loading = false;
        this.store.pets.push(saved);
        $state.go('store.pets', { id: this.store._id });
      });
  };
}