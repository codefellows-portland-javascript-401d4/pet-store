routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
	$stateProvider.state({
		name: 'home',
		url: '/',
		views: {
		    main: {
		    component: 'home' 
	        }
	    }
	});



	$stateProvider.state({
		name: 'stores',
		url: '/stores',
		abstract: true,
		default: '.all',
		resolve: {
			_id: ['storeService', '$transition$', (Store, t) => {
				return Store.get({ id: t.params().id });
			}],
            // make pets available to viewer components
			pets: ['store', a => a.pets]
		},
		component: 'stores' 
	});

	$stateProvider.state({
		name: 'stores.all',
		url: '/all',
		component: 'allStores'
	});

	// $stateProvider.state({
	// 	name: 'stores.add',
	// 	url: '/add',
	// 	component: 'addNewStore'
	// });


	// $stateProvider.state({
	// 	name: 'stores.id',
	// 	url: '/{id}',
	// 	abstract: true,
	// 	default: '.thumbnail',
	// 	resolve: {
	// 		album: ['storeService', '$transition$', (Album, t) => {
	// 			return Album.get({ id: t.params().id });
	// 		}],
    //         // make images available to viewer components
	// 		images: ['album', a => a.images]
	// 	},
	// 	component: 'album' 
	// });

	// $stateProvider.state({
	// 	name: 'gallery.album.detail',
	// 	url: '/detail',
	// 	component: 'detailView'
	// });

	// $stateProvider.state({
	// 	name: 'gallery.album.thumbnail',
	// 	url: '/thumbnail',
	// 	component: 'thumbnailView'
	// });

	$urlRouterProvider.otherwise('/');
}

