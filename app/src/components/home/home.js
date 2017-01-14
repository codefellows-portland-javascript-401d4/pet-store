import template from './home.html';

export default {
  template,
  controller,
  bindings: {
    authenticate: '<'
  }
};

controller.$inject = ['authService'];

function controller(authService) {
  this.logout = () => authService.logout();
  this.isAuthenticated = () => authService.isAuthenticated();
}