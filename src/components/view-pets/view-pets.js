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
 
	this.goToAddPets = () => {
		$state.go('store.addPet');
	};
 
	this.backToStores = () => {
		$state.go('stores');
	};
 
}
 