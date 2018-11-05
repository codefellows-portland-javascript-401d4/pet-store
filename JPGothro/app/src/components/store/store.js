
import template from './store.html';
import styles from './store.scss';

export default {
    template,
    controller,
    bindings: {
        storeId: '<',
        store: '<'
    }
};

function controller() {
    this.styles = styles;

    this.$onInit = () => {
        // console.log('the store Id:', this.storeId);
        // console.log('we gots us a store:', this.store);
    };

};
