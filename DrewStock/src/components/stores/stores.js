import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  bindings: {
    stores: '<'
  }
};

controller.$inject = [];

function controller() {

  this.styles = styles;


}
