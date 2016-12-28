import template from './new-store.html';
import styles from './new-store.scss';

export default {
  template,
  bindings:{
    add: '<'
  },
  controller
};

function controller () {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.street = '';
    this.city = '';
    this.state = '';
  };

  this.reset();

  this.addNew = () => {
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
    });
  };
}

