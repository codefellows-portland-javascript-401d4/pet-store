import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
    template,
    require: {
        parent: '^stores'
    },
    bindings: {
        stores: '<',
        del: '<'
    },
    controller
};

controller.$inject = ['storeService','$state'];

function controller(Store, $state) {
    this.styles = styles;

    this.toNewForm = () => {
        $state.go('stores.add');
    };

    this.go = () => {
        $state.go('stores.store', { id: this.selected._id });
    };
};