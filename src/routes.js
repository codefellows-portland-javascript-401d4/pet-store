routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        views: {
            main: {
                component: 'welcome'
            }
        }
    });

    $stateProvider.state({
        name: 'stores',
        abstract: true,
        default: '.all',
        url: '/stores',
        resolve: {
            stores: ['storeService', Store => Store.query()]
        },
        views: {
            main: {
                component: 'stores'
            }
        }
    });

    $stateProvider.state({
        name: 'stores.all',
        url: '/all',
        component: 'storesAll'
    });

    $stateProvider.state({
        name: 'stores.add',
        url: '/add',
        component: 'storesNew'
    });

    $stateProvider.state({
        name: 'stores.store',
        url: '/store/{id}',
        abstract: true,
        default: '.pets',
        resolve: {
            store: ['storeService', '$transition$', (Store, t) => {
                return Store.get({ id: t.params().id });
            }],
            pets: ['store', store => store.pets]
        },
        component: 'store'
    });

    $stateProvider.state({
        name: 'stores.store.pets',
        url: '/pets',
        component: 'storePets'
    });

    $stateProvider.state({
        name: 'stores.store.addPet',
        url: '/addpet',
        component: 'newPet'
    });


    $urlRouterProvider.otherwise('/');
};