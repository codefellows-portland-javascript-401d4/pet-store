import template from './store-pets.html';
import styles from './store-pets.scss';

export default {
  template,
  bindings: {
    store: '<',
    pets: '<'
  },
  controller,
  controllerAs:'$storePets'
};

controller.$inject = ['$state'];

function controller() {
  this.styles = styles;

}