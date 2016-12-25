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

    $urlRouterProvider.otherwise('/');
};