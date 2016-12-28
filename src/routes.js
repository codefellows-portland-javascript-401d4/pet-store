routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'stores',
        url: '/stores',
        abstract: true,
        default: '.all',
        resolve: {
            stores: ['storeService', stores => {
                return stores.get();
            }]
        },
        component: 'stores'
    });

    $stateProvider.state({
        name: 'stores.all',
        url: '/all',
        component: 'allStores'
    });

    $stateProvider.state({
        name: 'stores.add',
        url: '/add',
        component: 'addStores'
    });

    $stateProvider.state({
        name: 'store',
        url: '/stores/:id',
        abstract: true,
        default: '.pets',
        resolve: {
            store: ['$transition$', 'storeService', (t, stores) => {
                return stores.get(t.params().id);
            }]
        },
        component: 'store'
    });

    $stateProvider.state({
        name: 'store.pets',
        url: '/pets',
        component: 'storePets'
    });

    $stateProvider.state({
        name: 'store.addPet',
        url: '/add',
        component: 'addPets'
    });

    $urlRouterProvider.otherwise('/stores/all');
    
}
