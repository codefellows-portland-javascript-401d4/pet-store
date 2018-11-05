import template from './storeAddPet.html';
import styles from './storeAddPet.scss';

export default {
    template,
    bindings: {
        storeId: '<',
        store: '<'
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

    this.addPet = () => {
        petService.add({name: this.name,
            animal: this.animalType = this.myChoice.value,
            store: this.storeId})
        .then( newPet => {
            this.store.pets.push(newPet);
            $state.go('store.pets');
        });
    };

    this.cancel = () => {
        $state.go('store.pets');
    };
}