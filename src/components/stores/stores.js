import template from './stores.html';
export default {
	template,
	bindings: {
		albums: '<'
	},
	controller
};

controller.$inject = ['storeService', '$state'];

function controller(Store, $state) {
    

	this.reset = () => {
		this.newStore = {};
	};

	this.reset();

	this.setStore = () => {
		if(!this.selected) return;
		$state.go('stores.store', { id: this.selected });
	};

	this.add = () => {
		new Store(this.newStore).$save()
            .then(store => {
	this.stores.push(store);
	this.reset();
	this.selected = store._id;
	this.setStore();
});
	};
}