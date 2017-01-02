import template from './add-store.html';
import styles from './add-store.scss';

export default {
  template,
  controller,
  require: {
    parent: '^stores'
  },
  binding: {
    storeId: '<'
  }
};

controller.$inject = ['$state', 'storeService'];

function controller($state, storeService) {
  this.styles = styles;

  this.reset = function() {
    this.name = '';
    this.address.street = '';
    this.address.city = '';
    this.address.state = '';
  };

  this.addStore = function() {
    storeService.addStore({
      name: this.name,
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state
      }
    })
      .then(addStore => {
        this.storeId = addStore._id;
        this.reset();
        $state.go('store', {id: this.storeId});
      });
  };
}
