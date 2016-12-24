import template from './stores.html';
import styles from './stores.scss';

export default {
    template,
    controller
};

controller.$inject = ['storeService'];

function controller(stores, $state) {
    this.styles = styles;

    stores.get().then(stores => {
        this.stores = stores;
    });

}


