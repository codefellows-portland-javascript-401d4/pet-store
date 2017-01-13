import template from './add-pet.html';
import styles from './add-pet.scss';

export default {
  template,
  controller,
  require: {
    parent: '^store'
  },
  bindings: {
    store: '<',
    id: '<'
  }
};

controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {
  this.styles = styles;

  this.types = ['cat', 'lizard', 'bird', 'dog', 'fish'];

  this.reset = function() {
    this.name = '';
    this.type = '';
  };

  this.addPet = () => {
    storeService.addPet({
      name: this.name,
      animal: this.type,
      store: this.id
    })
    .then(res => { // eslint-disable-line
      this.reset();
      $state.go('store.pets', {id: this.id});
    });
  };
}
