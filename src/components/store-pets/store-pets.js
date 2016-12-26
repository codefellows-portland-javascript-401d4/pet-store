import template from './store-pets.html';
import styles from './store-pets.scss';

export default {
    template,
    transclude: true,
    require: {
        parent: '^store'
    },
    bindings: {
        store: '<',
        pets: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
};