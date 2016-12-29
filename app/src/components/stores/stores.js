import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  bindings: {
    stores: '<'
  }
};

controller.$inject = ['storeService', '$state'];

function controller(stores, $state) {
  this.styles  = styles;

  this.$onInit = () => {
    const stores = this.stores;
    if(stores.length) {
      this.selected = stores[0]._id;
    }
  };

  this.setStore = () => {
    if(!this.selected) return;
    $state.go('store', { id: this.selected });
  };
}