routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
	$stateProvider.state({
		name: 'home',
		url: '/',
		data: { public: true },
	    component: 'home' 
	});

	$stateProvider.state({
		name: 'stores',
		url: '/stores',
		data: { public: true },
		abstract: true,
		default: '.all',
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
		data: { public: true },
		component: 'allStores'
	});

	$stateProvider.state({
		name: 'stores.add',
		url: '/add',
		data: { public: false },
		component: 'addNewStore'
	});

	$stateProvider.state({
		name: 'store',
		url: '/store/{id}',
		data: { public: true },
		abstract: true,
		default: '.pets',
		resolve: {
			store: ['storeService', '$transition$', (Store, t) => {
				return Store.get(t.params().id);
			}],
			pets: ['store', a => a.pets]
		},
		component: 'store' 
	});
 
	$stateProvider.state({
		name: 'store.pets',
		url: '/pets',
		data: { public: true },
		component: 'viewPets'
	});
 
	$stateProvider.state({
		name: 'store.addPet',
		url: '/add',
		data: { public: false },
		component: 'addPet'
	});

	$stateProvider.state({
		name: 'sign-up',
		url: '/sign-up',
		data: { public: true },
		component: 'signUp'
	});

	$stateProvider.state({
		name: 'sign-in',
		url: '/sign-in',
		data: { public: true },
		component: 'signIn'
	});


	$urlRouterProvider.otherwise('/');
}

