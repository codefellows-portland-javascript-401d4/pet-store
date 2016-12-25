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
        url: '/stores',
        resolve: {
            stores: ['storeService', Store => Store.query()]
        },
        component: 'stores',
        views: {
            main: {
                component: 'stores'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
};