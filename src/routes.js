routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'app',
    url: '/',
    component: 'app'
  });

  $urlRouterProvider.otherwise('app');

}