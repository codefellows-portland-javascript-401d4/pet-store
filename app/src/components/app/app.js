import template from './app.html';

export default {
    template,
    controller
};

function controller(userService) {
    this.logOut = () => {
        userService.logout();
    };
}