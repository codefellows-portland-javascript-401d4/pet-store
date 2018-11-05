import template from './store-pets.html';
import styles from './store-pets.scss';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller: function() {
    this.styles = styles;
  }
};