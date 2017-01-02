import template from './stores-add.html';
import styles from './stores-add.scss';

export default {
  template,
  bindings: {
    stores: '<',
    add: '<'
  },
  require: {
    parent: '^stores'
  },
  controller

};

// controller.$inject = [ 'storesService' ];

function controller() {
  this.styles = styles;

  console.log('IN ADD STORES');
  this.reset = () => {
    this.name = '';
    this.address = {
      street: '',
      city: '',
      state: ''
    };

  };

  this.reset();

  this.addStore = () => {
    this.parent.add({
      name: this.name, 
      address: {
        street: this.address.street,
        city: this.address.city,
        state: this.address.state

      },
    });
  };

  this.scratch = () => {
    this.parent.cancel();

  };
}
