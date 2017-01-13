import template from './pets.html';
import styles from './pets.scss';

export default {
  template,
  controller,
  require: {
    parent: '^store'
  },
  bindings: {
    store: '<'
  }
};

function controller() {
  this.styles = styles;
}
