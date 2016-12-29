import template from './signin.html';

export default {
    template,
    bindings:  { success: '<'},
    controller
};

controller.$inject = ['userService'];

function controller(userService) {
    this.credentials = {
        username: '',
        password: ''
    };

    this.authenticate = () => {
        return userService.signin(this.credentials)
            .then(() => {
                this.success();
            })
            .catch(error => {
                this.error = error;
            });
    };
}