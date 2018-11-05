import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller,
  controllerAs: '$storesAll'
};

function controller() {
  this.styles = styles;
}