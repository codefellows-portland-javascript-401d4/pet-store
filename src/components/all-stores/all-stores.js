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
		$state.go('store', {id: this.selected});
		
	};

	this.goToAddStore = () => {
		$state.go('stores.add');
	};
     
}
