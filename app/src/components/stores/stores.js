import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller
};

controller.$inject = [ 'storeService' ];

function controller(storeService) {
  this.styles = styles;

  this.add = function(store) {
    storeService.addStore(store);
  };
}