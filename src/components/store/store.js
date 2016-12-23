import template from './stores.html';

export default {
  template,
  controller,
  bindings: {
    store: '<'
  }
};

function controller() {
  this.name = this.store.name;
  this.stree = this.store.street;
  this.city = this.store.city;
  this.state = this.store.state;
}