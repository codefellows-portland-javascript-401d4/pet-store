import template from './add-stores.html';
import styles from './add-stores.scss';

export default {
    template,
    bindings: {
        stores: '<',
    },
    controller,
};

controller.$inject = ['storeService', '$state'];

function controller(stores, $state) {
    this.styles = styles;

    this.backToAll = () => {
        $state.go('stores.all');
    };

    this.addStore = () => {
        stores.add({
            name: this.name,
            address: {
                street: this.street,
                city: this.city,
                state: this.state
            }
        })
        .then(saved => {
            const newStoreId = saved._id;               
            this.stores.push(saved);
            $state.go('store', {id: newStoreId});
        });
    };
    
}


