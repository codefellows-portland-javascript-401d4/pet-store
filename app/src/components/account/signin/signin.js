import template from './signin.html';

export default {
  template,
  bindings: {
    success: '<'
  },
  controller
};

controller.$inject = ['authService'];

function controller(authService) {
  this.credentials = {
    username: '',
    password: '',
  };

  this.authenticate = () => {
    return authService.signin(this.credentials)
      .then(() => {
        this.success();
      })
      .catch(error => this.error = error);
  };
}