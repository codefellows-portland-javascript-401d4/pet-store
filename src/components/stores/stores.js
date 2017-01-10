import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  controllerAs: '$stores'
};

controller.$inject = ['storeService'];

function controller(stores) {
  this.styles = styles;

  stores.getAll().then(stores => {
    this.stores = stores;
  });

}