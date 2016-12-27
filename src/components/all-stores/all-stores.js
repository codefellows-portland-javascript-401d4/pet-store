import template from './all-stores.html';
export default {
	template,
	bindings: {
		stores: '<',
		id: '<'
	},
	controller
};

controller.$inject = ['$state'];
 
function controller($state) {
 
	this.setStore = () => {
		$state.go('stores/'+'{id: '+this.selected+'}');
		console.log('route to ', this.selected);
	};

	this.goToAdd = () => {
		$state.go('stores.add');
	};
     
}
