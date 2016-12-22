import template from './store-detail.html';

export default {
  template,
  bindings: { 
    id: '<'
  },
  controller
};

controller.$inject = ['storeService', 'petService'];

function controller(stores, pets) {

  this.$onInit = () => {
    stores.get(this.id).then(store => {
      this.store = store;
      this.pets = store.pets;
    });
  };	

  this.add = pet => {
    this.loading = true;
    pets.add(pet)
            .then(saved => {
              this.loading = false;
              this.pets.push(saved);
            });
  };

}