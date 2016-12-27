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
        pets: '<',
        del: '<'
    },
    controller
};

controller.$inject = ['petService','$state'];

function controller(petService, $state) {
    this.styles = styles;

    this.goAddPet = () => {
        $state.go('stores.store.addPet');
    };
};