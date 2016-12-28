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
                console.log('Added Store:', addedStore);
                $state.go('store', {id: addedStore._id});
            });
    };

    this.cancel = () => {
        $state.go('stores.all');
    };
}