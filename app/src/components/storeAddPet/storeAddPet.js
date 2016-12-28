import template from './storeAddPet.html';
import styles from './storeAddPet.scss';

export default {
    template,
    controller
};

controller.$inject = ['petService', '$state'];

function controller(petService, $state) {
    this.styles = styles;

    this.addPet = () => {
        petService.add({name: this.name,
            animal: this.animalType});
    };

    this.cancel = () => {
        $state.go('store');
    };
}