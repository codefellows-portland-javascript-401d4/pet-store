import template from './all-stores.html';
import styles from './all-stores.scss';

export default {
  template,
  controller,
  bindings: {
    storeList: '<'
  }
};

function controller() {
  this.styles = styles;
}