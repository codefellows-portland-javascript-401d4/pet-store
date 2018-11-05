import template from './new-pet.html';
import styles from './new-pet.scss';

export default {
    template,
    transclude: true,
    require: {
        parent: '^store'
    },
    bindings: {
        store: '<',
        pets: '<',
        category: '<'
    },
    controller
};

controller.$inject = ['petService', '$state'];

function controller(petService, $state) {
    this.styles = styles;

    this.reset = () => {
        this.petName = '';
        this.selectedCategory = '';
    };

    this.addNewPet = () => {
        petService
            .add({
                name: this.petName,
                animal: this.selectedCategory,
                store: this.store._id
            })
            .then(pet => {
                this.store.pets.push(pet);
                this.reset();
            });
    };

    this.goBack = () => {
        $state.go('stores.store', {id: this.store._id});
    };
};