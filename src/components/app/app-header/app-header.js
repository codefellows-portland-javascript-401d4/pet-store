import template from './app-header.html';
import styles from './app-header.scss';

export default {
  template,
  controller,
  controllerAs: '$appHeader'
};

controller.$inject = ['userService'];

function controller(userService) {
  this.styles = styles;

  this.logout = () => userService.logout();
  this.isAuthenticated = () => userService.isAuthenticated();
}