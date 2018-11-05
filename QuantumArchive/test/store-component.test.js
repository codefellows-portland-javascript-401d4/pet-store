describe('store component test', () => {

    const {assert} = chai;
    
    beforeEach(
        angular.mock.module('components')
    );

    let $component = null;

    beforeEach(angular.mock.inject(($componentController) => {
        $component = $componentController;
    }));

    describe('create component', () => {
        const pets = [{name: 'Faux', animal: 'cat', _id: '1234'}, {name: 'Qux', animal: 'cat', _id: '5678'}];
        const pet = {name: 'Faux', animal: 'cat', _id: '1234'};
        const store = {pets};

        const petService = {
            remove(id) { // eslint-disable-line
                return Promise.resolve(pet);
            }
        };

        it('deletes a pet', done => {
            const component = $component('store', {petService});
            component.store = store;    
            component.del(pet);

            setTimeout(() => {
                assert.equal(component.store.pets.length, 1);
                done();
            });
        });
    });
});