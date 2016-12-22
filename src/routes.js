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

    
    $urlRouterProvider.otherwise('/');
}