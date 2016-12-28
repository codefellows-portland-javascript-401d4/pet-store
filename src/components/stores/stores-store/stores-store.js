import template from './stores-store.html';
// import styles from './stores-store.scss';

export default {
  template,
  bindings: {
    id: '<'
  },
  controller

};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  // this.styles = styles;
  // console.log('stores.store, getStore: ', this.store.id);
  this.$onInit = () => {
    stores.get(this.id)
    .then(store => {
      this.store = store;
    });

  };
}