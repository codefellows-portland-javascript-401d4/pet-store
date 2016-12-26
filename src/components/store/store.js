import template from './store.html';
import styles from './store.scss';

export default {
    template,
    bindings: {
        store: '<',
        pets: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
};