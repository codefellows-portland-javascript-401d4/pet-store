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

  $stateProvider.state({
    name: 'store',
    url: '/store/:id',
    abstract: true,
    default: '.pets',
    resolve: {
      store: ['storesService', '$transition$', (stores, t) => {
        return stores.get(t.params().id);
      }],
      pets: ['store', store => store.pets]
    },
    component: 'store'
  });

  $stateProvider.state({
    name: 'store.pets',
    url: '/pets',
    component: 'storePets'
  });

  $stateProvider.state({
    name: 'store.newPet',
    url: '/new',
    component: 'newPet'
  });

  $urlRouterProvider.otherwise('/stores/all');
  $urlRouterProvider.when('/stores', '/stores/all');

}