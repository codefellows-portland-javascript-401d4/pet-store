import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
    template,
    bindings: {
        stores: '<'
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

    this.remove = () => {
        console.log(this.selected);
        this.selected.$delete()
            .then(store => {
                const index = this.stores.indexOf(store);
                if (index !== -1) this.stores.splice(index, 1);
                console.log(this.stores);
            });
    };
};