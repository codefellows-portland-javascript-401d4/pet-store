import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller,
};

controller.$inject = ['storeService', 'userService'];

function controller (storeServie, userService) {
  this.styles = styles;
  this.logout = () => userService.logout();
  this.isAuthenticated = () => {
    return userService.isAuthenticated();
  };
  // this.add = store => {
  //   storeService.add(store)
  //     .then(saved => {
  //       this.images.push(saved);
  //     });
  // };
}