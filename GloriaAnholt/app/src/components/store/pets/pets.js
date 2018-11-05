import template from './pets.html';
import styles from './pets.scss';

export default {
  template,
  controller,
  bindings: {
    store: '<'
  },
  require: {
    parent: '^store'
  }
};

function controller() {
  this.styles = styles;
}