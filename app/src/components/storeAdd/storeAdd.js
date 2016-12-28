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
        storeService.add(this.newStore);
        this.stores.push(this.newStore);
        console.log('Added Store:', this.newStore);
        $state.go('store', {id: this.newStore._id});
    };

    this.cancel = () => {
        $state.go('stores.all');
    };
}