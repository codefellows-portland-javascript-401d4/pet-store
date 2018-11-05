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

    this.del = store => {
        store.$delete()
            .then(store => {
                const index = this.stores.indexOf(store);
                if (index !== -1) this.stores.splice(index, 1);
            });
    };
};