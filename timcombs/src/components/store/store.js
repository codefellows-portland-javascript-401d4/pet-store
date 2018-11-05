import template from './store.html';
import styles from './store.scss';

export default {
  template,
  bindings: {
    id: '<',
    store: '<'
  },
  controller,
  controllerAs: '$store'
};

function controller() {
  this.styles = styles;

}
