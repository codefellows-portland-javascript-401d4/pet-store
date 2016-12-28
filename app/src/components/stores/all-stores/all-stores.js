import template from './all-stores.html';
import styles from './all-stores.scss';

export default {
    template,
    bindings: {
        stores: '='
    },
    controller
};

function controller() {
    this.styles = styles;
}
