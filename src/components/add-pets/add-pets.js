import template from './add-pets.html';
import styles from './add-pets.scss';

export default {
    template,
    bindings: { 
        store: '<'
    },
    controller
};

controller.$inject = ['petService', '$state'];

function controller(pets, $state) {
    this.styles = styles;

    this.addPet = () => {
        pets.add({
            name: this.name,
            animal: this.animal,
            store: this.store._id
        })
        .then(saved => {
            const storeId = this.store._id;
            this.store.pets.push(saved);
            $state.go('store', {id: storeId});
        });
    };

    this.backToStore = () => {
        $state.go('store', {id: this.store._id});
    };
    
}


