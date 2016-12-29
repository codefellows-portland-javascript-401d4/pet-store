import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller,
  bindings: {
    storeId: '=',
    store: '<'
  }
};

controller.$inject = [ 'storeService' ];

function controller(storeService) {
  this.styles = styles;

  // this.add = function(store) {
  //   storeService.addStore(store)
  //     .then(newStore => {
  //       this.storeId = newStore._id;
  //     });
  // };
}