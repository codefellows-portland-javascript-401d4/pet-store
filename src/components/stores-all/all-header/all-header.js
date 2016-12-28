import template from './all-header.html';
import styles from './all-header.scss';

export default {
  template,
  controller,
  controllerAs: '$allHeader'
};

function controller() {
  this.styles = styles;

}