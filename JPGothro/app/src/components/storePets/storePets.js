
import template from './storePets.html';
import styles from './storePets.scss';

export default {
    template,
    controller,
    bindings: {
        store: '<'
    }
};

function controller() {
    this.styles = styles;

};