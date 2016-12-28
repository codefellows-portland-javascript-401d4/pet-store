import template from './add-pets.html';

export default {
    template,
    bindings: {
        store: '<'
    },
    controller
};

function controller() {
    this.add = () => {
        console.log(this.pet);
        this.reset();
    };

    this.reset = () => {
        this.pet = {};
    };
}