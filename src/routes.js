routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
	$stateProvider.state({
		name: 'home',
		url: '/',
	    component: 'home' 
	});

	$stateProvider.state({
		name: 'stores',
		url: '/stores',
		abstract: true,
		default: '.all',
		// resolve: {
		// 	_id: ['storeService', '$transition$', (Store, t) => {
		// 		return Store.get({ id: t.params().id });
		// 	}],
        //     // make pets available to viewer components
		// 	pets: ['store', a => {
		// 		return a.$promise.then(a => a.pets);
		// 	}]
		// },
		component: 'stores',
		resolve: {
			    stores: ['storeService', stores => {
				    return stores.getAll();
			}]
		} 
	});

	$stateProvider.state({
		name: 'stores.all',
		url: '/all',
		component: 'allStores'
	});

	$stateProvider.state({
		name: 'stores.add',
		url: '/add',
		component: 'addNewStore'
	});

	$stateProvider.state({
		name: 'stores.id',
		url: '/:id',
		abstract: true,
		default: 'pets',
		resolve: {
			stores: ['storeService', '$transition$', (Store, t) => {
				return Store.get(t.params().id);
			}],
            // make images available to viewer components
			pets: ['store', a => a.pets]
		},
		component: 'stores' 
	});
 
	$stateProvider.state({
		name: 'stores.pets',
		url: '/pets',
		component: 'viewPets'
	});
 
	$stateProvider.state({
		name: 'store.addPet',
		url: '/add',
		component: 'addPets'
	});

	$urlRouterProvider.otherwise('/');
}

