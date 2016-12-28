import template from './store-app.html';
import styles from './store-app.scss';

export default {
  template,
  styles,
  controller
};

controller.$inject = ['userService'];

function controller(userService) {
  this.styles = styles;
  this.logout = () => userService.logout();
  this.isAuthenticated = () => userService.isAuthenticated();
}
