import template from './addNewStore.html';
export default {
	template,
	bindings: {
		stores: '<',
		id: '<'
	},
	controller
};

controller.$inject = ['storeService', '$state'];
 
function controller(Store, $state) {

	this.backToStores = () => {
		$state.go('stores');
	};
 
	this.newStore = () => {
		Store.add({
			name: this.name,
			address: {
				street: this.street,
				city: this.city,
				state: this.state
			}
		})
         .then(saved => {              
	this.stores.push(saved);
	$state.go('store', {id: saved._id});
});
	};


     
}
