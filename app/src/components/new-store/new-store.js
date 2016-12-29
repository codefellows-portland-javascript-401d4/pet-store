import template from './new-store.html';
import styles from './new-store.scss';

export default {
  template,
  bindings:{
    add: '=',
    stores: '<'
  },
  controller
};

controller.$inject = ['$state'];


function controller ($state) {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.street = '';
    this.city = '';
    this.state = '';
  };

  this.reset();

  this.addNew = () => {
    console.log('name', this.name);
    this.add({
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
    })
    .catch(err => {
      console.log('error in newstore', err);
    });
  };
}

