import template from './store-pets.html';
import styles from './store-pets.scss';

export default {
    template,
    bindings: { 
        store: '<'
    },
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.styles = styles;

    this.goToAddPets = () => {
        $state.go('store.addPet');
    };

    this.backToStores = () => {
        $state.go('stores');
    };

}


