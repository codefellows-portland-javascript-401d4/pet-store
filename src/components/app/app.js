import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controller,
  controllerAs: '$app'
};

controller.$inject = ['$state'];

function controller($state) {
  this.styles = styles;
  
  console.log($state);
}