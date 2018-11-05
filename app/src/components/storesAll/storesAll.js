import template from './storesAll.html';
import styles from './storesAll.scss';

export default {
    template,
    controller, 
    bindings: {
        stores: '<'
    }
};

function controller() {
    this.styles = styles;
}