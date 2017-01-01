import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  bindings: {
    store: '<'
  }
};

controller.$inject = [ 'storeService' ];

function controller() {
  this.styles = styles;
}