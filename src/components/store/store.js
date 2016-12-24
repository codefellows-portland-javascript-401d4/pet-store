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

function controller() {
    this.styles = styles;
}


