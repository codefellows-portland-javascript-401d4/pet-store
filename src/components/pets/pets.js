import template from './pets.html';

export default {
    template,
    bindings: {
        store: '<'
    }, 
    controller
};

function controller() {
    this.$onInit = function() {
        this.name = this.store.name;
        this.address = this.store.address;
        this.pets = this.store.pets;
    };
}