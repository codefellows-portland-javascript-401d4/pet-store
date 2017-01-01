import template from './all-stores.html';
import styles from './all-stores.scss';

export default {
  template,
  controller,
  bindings: {
    storeDirectory: '<'
  }
};

function controller() {
  this.styles = styles;
}
