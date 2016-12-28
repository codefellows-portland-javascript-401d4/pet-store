import template from './view-pets.html';
 
export default {
	template,
	bindings: { 
		store: '<'
	},
	controller
};
 
controller.$inject = ['$state'];
 
function controller($state) {
     
	this.backToStores = () => {
		$state.go('stores');
	}; 

	this.addPet = () => {
		console.log(this.store._id);
		// console.log('addpet clicked.  store id is ', store._id);
		$state.go('store.addPet', {id: this.store._id});
	};


}
 