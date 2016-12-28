import template from './add-pets.html';

export default {
    template,
    bindings: {
        store: '<'
    },
    controller
};

controller.$inject = ['petService', '$state'];

function controller(petService, $state) {
    this.animalTypes = ['cat', 'lizard', 'bird', 'dog', 'fish'];
    this.reset = () => {
        this.pet = {};
    };

    this.reset();

    this.add = () => {
        this.pet.store = this.store._id;
        petService.add(this.pet)
            .then(pet => {
                this.store.pets.push(pet);
            })
            .then(() => {
                this.reset();
                $state.go('store', {id: this.store._id});
            });
    };
}