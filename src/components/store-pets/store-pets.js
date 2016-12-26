import template from './store-pets.html';
import styles from './store-pets.scss';

export default {
    template,
    transclude: true,
    require: {
        parent: '^store'
    },
    bindings: {
        store: '<',
        pets: '<'
    },
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.styles = styles;

    this.goAddPet = () => {
        $state.go('stores.store.addPet');
    };
};