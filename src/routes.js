routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {



    $stateProvider.state({
        name: 'stores',
        url: '/stores',
        abstract: true,
        default: '.all',
        component: 'stores',

    });

    $stateProvider.state({
        name: 'stores.all',
        url: '/all',
        component: 'allStores'
    });

    $stateProvider.state({
        name: 'stores.add',
        url: '/add',
        component: 'addStore'
    });

    $stateProvider.state({
        name: 'store',
        url: '/store/:id',
        component: 'store',
        abstract: true,
        default: 'store.pets',
        resolve: {
            id: ['$transition$', t => t.params().id],
            store: ['storeService', 'id', (Store, id) => {
                return Store.get({id: id});
            }]        
        }
    });

    $stateProvider.state({
        name: 'store.pets',
        url: '/pets',
        component: 'pets',
    });

    $stateProvider.state({
        name: 'store.addPet',
        url: '/add',
        component: 'addPet'
    });
    
    $urlRouterProvider.otherwise('/stores/all');
}