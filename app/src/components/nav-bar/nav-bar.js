import template from './nav-bar.html';
import styles from './nav-bar.scss';

export default {
    template,
    controller
};

controller.$inject = ['userService'];

function controller(userService) {
    this.styles = styles;
    this.logOut = () => {
        userService.logout();
    };
}