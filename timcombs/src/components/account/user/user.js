import template from './user.html';
import styles from './user.scss';

export default {
  template,
  bindings: {
    user: '='
  },
  controller,
  controllerAs: '$user'
};

function controller() {
  this.styles = styles;
}