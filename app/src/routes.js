routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        date: {
            public: true
        },
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'stores',
        url: '/stores',
        abstract: true,
        default: '.all',
        resolve: {
            stores: ['storeService', storeService => {
                return storeService.getAll();
            }]
        },
        component: 'stores'
    });

    $stateProvider.state({
        name: 'stores.all',
        url: '/all',
        views: {
            main: {
                component: 'allStores'
            }
        }
    });

    $stateProvider.state({
        name: 'stores.add',
        url: '/add',
        views: {
            main: {
                component: 'addStore'
            }
        }
    });

    $stateProvider.state({
        name: 'store',
        url: '/stores/:id',
        abstract: true,
        default: '.pets',
        resolve: {
            store: ['storeService', '$transition$', (storeService, t) => {
                return storeService.get(t.params().id);
            }],
            pets: ['store', store => store.pets]
        },
        component: 'store'
    });

    $stateProvider.state({
        name: 'store.pets',
        url: '/pets',
        views: {
            main: {
                component: 'storePets'
            }
        }
    });

    $stateProvider.state({
        name: 'store.addPet',
        url: '/add-pet',
        views: {
            main: {
                component: 'addPets'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}