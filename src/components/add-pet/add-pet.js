import template from './add-pet.html';

export default {
    template, 
    controller,
    bindings: {
        id: '<',
        store: '<'
    }
};

controller.$inject = ['petService', '$state'];

function controller(Pet, $state) {
    this.reset = function() {
        for(var key in this.newPet) {
            this.newPet[key] = '';
        }
    };
    this.addPet = function() {

        if (!this.newPet.name || !this.newPet.animal) {
            return;
        }

        this.newPet.store = this.id;
        new Pet (this.newPet).$save()
            .then(pet => {
                this.store.pets.push(pet);
            }
            )
            .catch(console.error);

        this.reset();

        $state.go('store', {id: this.id});
    };

    this.cancel = function() {
        this.newPet = '';
        $state.go('store', {id: this.id});
    };
}