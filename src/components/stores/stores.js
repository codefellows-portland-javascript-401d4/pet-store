import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller
};

controller.$inject = [ 'storesService', '$state' ];

function controller(stores, $state) {
  this.styles = styles;
  
  console.log( 'IN STORES' );

  this.$onInit = () => {
    console.log( 'stores in stores: ', this.stores );

  };

  this.add = (store) => {
    stores.add( store )
    .then(saved => {
      this.stores.push( saved );
      $state.go('stores.store', { id: saved._id });

    });
  };
}