import template from './store.html';
import styles from './store.scss';

export default {
    template,
    bindings: { 
        id: '<',
        store: '<'
    },
    controller
};

controller.$inject = ['userService'];

function controller(userService) {
    this.styles = styles;
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
}


