routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    default: '.all',
    resolve: {
      stores: ['storesService', storesService => storesService.getAll()],
      add: ['storesService', storesService => storesService.add]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.all',
    url: '/all',
    component: 'allStores'
  });

  $stateProvider.state({
    name: 'stores.new',
    url: '/new',
    component: 'newStore'
  });

  $urlRouterProvider.otherwise('/stores');

}