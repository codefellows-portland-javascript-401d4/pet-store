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

    this.choices = [
        {name: 'Bird', value: 'bird'},
        {name: 'Cat', value: 'cat'},
        {name: 'Dog', value: 'dog'},
        {name: 'Fish', value: 'fish'},
        {name: 'Lizard', value: 'lizard'}
    ];

    this.myChoice = this.choices[0];

    console.log('the storeId:', this.storeId);

    this.addPet = () => {
        petService.add({name: this.name,
            animal: this.animalType = this.myChoice.value,
            store: this.storeId});
    };

    this.cancel = () => {
        $state.go('store');
    };
}