
import template from './storesMain.html';
import styles from './storesMain.scss';

export default {
    template,
    controller, 
    bindings: {
        stores: '<'
    }
};

function controller() {
    this.styles = styles;
    this.stores = [];

};
