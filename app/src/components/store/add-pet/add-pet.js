import template from './add-pet.html';
import styles from './add-pet.scss';

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

controller.$inject = [ '$state' ];

function controller($state) {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.animal = '';
  };

  this.addNew = () => {
    this.parent.add({
      name: this.name,
      animal: this.animal,
      store: this.store._id
    });

    this.reset();
    $state.go('store.pets', { id: this.store._id });
  };

  this.cancel = () => {
    $state.go('store.pets', { id: this.store._id });
  };
}