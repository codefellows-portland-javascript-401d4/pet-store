import template from './storeAdd.html';
import styles from './storeAdd.scss';

export default {
    template,
    controller
};

controller.$inject = ['storeService'];

function controller(storeService) {
    this.styles = styles;

    this.reset = () => {
        this.newStore.name = '';
        this.newStore.address = '';
        this.newStore.city = '';
        this.newStore.state = '';
    };

    this.newStore = {
        name: '',
        address: '',
        city: '',
        state: ''
    };

    this.addStore = () => {
        storeService.add(this.newStore);
        this.reset();
    };
}