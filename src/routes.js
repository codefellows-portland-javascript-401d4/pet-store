routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {



    $stateProvider.state({
        name: 'stores',
        url: '/stores',
        component: 'stores',
    });

    
    $urlRouterProvider.otherwise('/');
}