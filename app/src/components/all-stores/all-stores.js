import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  bindings: {
    storeList: '<'
  }
};

function controller() {
  console.log('In stores.js');
  this.styles = styles;
}