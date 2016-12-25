import template from './stores.html';
import styles from './stores.scss';

export default {
    template,
    bindings: {
        stores: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
};