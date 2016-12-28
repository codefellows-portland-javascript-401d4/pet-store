import template from './add-pet.html';


export default {
	template,
	bindings: { 
		store: '<'
	},
	controller
};
 
controller.$inject = ['petService', '$state'];
 
function controller(pets, $state) {
 
	this.species = ['cat', 'lizard', 'bird', 'dog', 'fish'];

	this.addThisPet = () => {
		pets.add({
			name: this.name,
			animal: this.animal,
			store: this.store._id
		})
         .then(saved => {
	const storeId = this.store._id;
	this.store.pets.push(saved);
	$state.go('store', {id: storeId});
});
	};

	this.backToViewPets = () => {
		$state.go('store.pets');
	}; 
    
	this.backToStores = () => {
		$state.go('stores');
	}; 
     
}