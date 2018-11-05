import template from './stores-store.html';
import styles from './stores-store.scss';

export default {
  template,
  bindings: {
    id: '<',
    store: '<',
    pets: '<'
    
  },
  controller

};

controller.$inject = [ 'storesService', 'petService', '$state' ];

function controller(stores, pets, $state) {
  this.styles = styles;
  this.$onInit = () => {
    stores.get(this.id)
    .then(store => {
      this.store = store;
      
    });

    this.addPet = (pet) => {
      pets.add( pet );
      $state.go('stores.store.pets', { id: this.store._id }, { location: 'replace', inherit: false, reload: true });
      
    };

    this.cancel = () => {
      $state.go( 'stores.store.pets', {id: this.store._id} );

    };
  };
}