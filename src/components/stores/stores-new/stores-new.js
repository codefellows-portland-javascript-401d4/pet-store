import template from './stores-new.html';
import styles from './stores-new.scss';

export default {
    template,
    bindings: {
        stores: '<',
        add: '<'
    },
    require: {
        parent: '^stores'
    },
    controller
};

controller.$inject = ['storeService'];

function controller(Store) {
    this.styles = styles;

    this.reset = () => {
        this.storeName = '';
        this.street = '';
        this.city = '';
        this.usState = '';
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
        });
    };
}