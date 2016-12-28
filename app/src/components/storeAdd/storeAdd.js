import template from './storeAdd.html';
import styles from './storeAdd.scss';

export default {
    template,
    controller
};

controller.$inject = ['storeService', '$state'];

function controller(storeService, $state) {
    this.styles = styles;

    this.newStore = {
        name: '',
        address: '',
        city: '',
        state: ''
    };

    this.addStore = () => {
        console.log(this.newStore);
        storeService.add(this.newStore);
    };

    this.cancel = () => {
        $state.go('stores.all');
    };
}