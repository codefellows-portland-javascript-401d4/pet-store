import template from './stores-new.html';
import styles from './stores-new.scss';

export default {
    template,
    transclude: true,
    bindings: {
        stores: '<',
        add: '<'
    },
    require: {
        parent: '^stores'
    },
    controller
};

controller.$inject = ['storeService', '$state'];

function controller(Store, $state) {
    this.styles = styles;

    this.reset = () => {
        this.storeName = '';
        this.street = '';
        this.city = '';
        this.usState = '';
    };

    this.toAll = () => {
        $state.go('stores.all');
    };

    this.toStore = store => {
        $state.go('stores.store', { id: store._id });
    };

    this.addNew = () => {
        new Store({
            name: this.storeName,
            address: {
                street: this.street,
                city: this.city,
                state: this.usState
            }
        })
        .$save()
        .then(store => {
            this.stores.push(store);
            this.reset();
            this.toStore(store);
        });
    };
}