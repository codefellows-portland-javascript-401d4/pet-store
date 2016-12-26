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

controller.$inject = ['petService','$state'];

function controller(petService, $state) {
    this.styles = styles;

    this.goAddPet = () => {
        $state.go('stores.store.addPet');
    };

    this.remove = pet => {
        petService
            .remove(pet._id)
            .then(removedPet => {
                let index = -1;
                this.store.pets.some((pet, petIndex) => {
                    if (removedPet._id === pet._id) {
                        index = petIndex;
                        return;
                    };
                });
                if (index !== -1) this.store.pets.splice(index, 1);
            });
    };
};