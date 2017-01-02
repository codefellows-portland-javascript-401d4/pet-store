import template from './store.html';
import styles from './store.scss';

export default {
    template,
    bindings: {
        store: '<',
        pets: '<'
    },
    controller
};

controller.$inject = ['petService'];

function controller(petService) {
    this.styles = styles;

    this.del = pet => {
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