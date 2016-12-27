
import template from './storesMain.html';
import styles from './storesMain.scss';

export default {
    template,
    controller
};

controller.$inject = ['storeService'];

function controller(storeService) {
    this.styles = styles;
    this.stores = [];

    this.newStore = storeService.add();
};
