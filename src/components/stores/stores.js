import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  bindings: {
    stores: '<'
  }
};

controller.$inject = [];

function controller() {

  this.styles = styles;

  this.loading = true;

  // stores.getAll().then(stores => {
  //   // this.loading = false;
  //   this.stores = stores;
  // });

  // this.stores = stores;

  // this.add = store => {
  //   stores.add(store)
  //   .then(saved => {
  //     this.stores.push(saved);
  //   });
  // };

  this.new = () => {
    // $state.go('stores.add');
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = () => {
    this.viewDetail = true;
    this.viewNew = false;
  };

}
