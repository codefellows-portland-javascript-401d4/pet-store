import template from './pet.html';

export default {
  template,
  bindings: {
    store: '<'
  },
  controller,
};

controller.$inject = ['petService', 'userService'];

function controller (petService, userService) {
  this.logout = () => userService.logout();
  this.isAuthenticated = () => {
    return userService.isAuthenticated();
  };
}