
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
        resolve: {
            stores: ['storeService', Store => Store.get()]
        },
        component: 'storesMain'
    });

    $stateProvider.state({
        name: 'stores.all',
        url: '/stores',
        component: 'storesMain'
    });

    $stateProvider.state({
        name: 'stores.add',
        url: '/stores',
        component: 'storeAdd'
    });

    $stateProvider.state({
        name: 'store',
        url: '/:id',
        component: 'store'
    });

    $stateProvider.state({
        name: 'store.pets',
        url: '/:id',
        component: 'store'
    });

    $stateProvider.state({
        name: 'store.addPet',
        url: '/:id',
        component: 'addPet'
    });

    $urlRouterProvider.otherwise('/');
};

