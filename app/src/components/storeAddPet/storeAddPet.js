import template from './storeAddPet.html';
import styles from './storeAddPet.scss';

export default {
    template,
    bindings: {
        storeId: '<'
    },
    controller
};

controller.$inject = ['petService', '$state'];

function controller(petService, $state) {
    this.styles = styles;

    console.log('the storeId:', this.storeId);

    this.addPet = () => {
        petService.add({name: this.name,
            animal: this.animalType,
            store: this.storeId});
    };

    this.cancel = () => {
        $state.go('store');
    };
}