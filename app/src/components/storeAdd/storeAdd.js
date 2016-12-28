import template from './storeAdd.html';
import styles from './storeAdd.scss';

export default {
    template,
    bindings: {
        stores: '<'
    },
    controller
};

controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {
    this.styles = styles;
    this.stores = [];

    this.newStore = {
        name: '',
        address: {
            street: '',
            city: '',
            state: ''}
    };

    this.addStore = () => {
        storeService.add(this.newStore)
            .then(addedStore => { 
                this.stores.push(addedStore);
                $state.go('store.pets', {id: addedStore._id});
            });
    };

    this.cancel = () => {
        $state.go('stores.all');
    };
}