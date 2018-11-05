
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'stores',
        url: '/stores',
        abstract: true,
        default: '.all',
        resolve: {
            stores: ['storeService', Store => Store.get()]
        },
        component: 'storesMain'
    });

    $stateProvider.state({
        name: 'stores.all',
        url: '/all',
        component: 'storesAll'
    });

    $stateProvider.state({
        name: 'stores.add',
        url: '/add',
        resolve: {
            stores: ['storeService', Store => Store.get()]
        },
        component: 'storeAdd'
    });

    $stateProvider.state({
        name: 'store',
        url: '/:id',
        abstract: true,
        default: '.pets',
        resolve: {
            storeId: ['$transition$', t => t.params().id],
            store: ['storeService', 'storeId', (storeService, storeId) => {
                return storeService.getId(storeId);
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
        name: 'store.pets.addPet',
        url: '/addpet',
        component: 'storeAddPet'
    });

    $urlRouterProvider.otherwise('/');
};

