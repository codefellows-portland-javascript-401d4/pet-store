import template from './addStore.html';

export default {
  template,
  controller,
  bindings: {
    stores: '<'
  }
};

controller.$inject = ['storeService', '$state'];

function controller (stores, $state) {

  this.reset = () => {
    this.street = '';
    this.city = '';
    this.state = '';
    this.name = '';
  };
  this.reset();

  this.addNew = () => {
    const street = this.street;
    const city = this.city;
    const state = this.state;
    this.addStore({
      name: this.name,
      address: {
        street,
        city,
        state
      }
    });
    this.reset();
  };

  this.addStore = store => {
    stores.add(store)
      .then(saved => {
        this.stores.push(saved);
        $state.go('store', {id: saved._id});

      })
      .catch(err => console.log(err));
  };
}
