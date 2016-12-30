import template from './newStore.html';

export default {
  template,
  bindings: {
    stores: '<',
    add: '<'
  },
  controller
};

controller.$inject = ['storesService', '$state'];

function controller(storesService, $state) {

  this.reset = () => {
    this.name = '';
    this.street = '';
    this.city = '';
    this.state = '';
  };

  this.addNew = () => {
    storesService.add({
      name: this.name,
      address: {
        street: this.street,
        city: this.city,
        state: this.state
      }
    })
    .then(saved => {
      this.stores.push(saved);
      this.reset();
      $state.go('store', {id: saved._id});
      console.log('Store added: ', saved);
    })
    .catch(err => {
      console.log('add store catch', err);
    });
  };
}