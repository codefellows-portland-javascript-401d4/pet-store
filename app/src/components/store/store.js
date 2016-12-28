
import template from './store.html';
import styles from './store.scss';

export default {
    template,
    controller,
    bindings: {
        storeId: '<'
    }
};

controller.$inject = ['storeService'];

function controller(storeService) {
    this.styles = styles;

    this.store = {};

    this.$onInit = () => {
        if (this.storeId) {
            this.getId(this.storeId);
        }
    };

    this.getId = storeId => {
        // this.store._id = this.storeId;
        storeService.getId(this.storeId)
            .then(store => {
                this.store = store;
            });
    };

};
