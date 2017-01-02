import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<',
    selected: '='
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

  this.toStore = () => {
    console.log('IN TOSTORE');
    // if(!this.selected) return;
    $state.go('stores.store', { id: this.selected });
  };

  this.uiOnParamsChanged = params => {
    console.log('uiOnParamsChanged params: ', params);
    if(params.id) this.selected = params.id;
  };

  this.add = (store) => {
    stores.add( store )
    .then(saved => {
      this.stores.push( saved );
      $state.go('stores.store', { id: saved._id });

    });
  };

  this.cancel = () => {
    $state.go( 'stores', {}, { location: 'replace', inherit: false, reload: true } );

  };
}