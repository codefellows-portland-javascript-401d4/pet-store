routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    default: '.all',
    resolve: {
      storesList: ['storeService', stores => stores.getAll()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.all',
    url: '/all',
    component: 'allStores'
  });

  $stateProvider.state({
    name: 'stores.addStore',
    url: '/add-store',
    component: 'addStore'
  });

  $stateProvider.state({
    name: 'store',
    url: '/{id}',
    abstract: true,
    default: '.pets',
    resolve: {
      store: ['storeService', '$transition$', (stores, t) => stores.get(t.params().id)]
    },
    component: 'store'
  });

  $stateProvider.state({
    name: 'store.pets',
    url: '/pets',
    component: 'storePets'
  });

  $stateProvider.state({
    name: 'store.addPet',
    url: '/add-pet',
    component: 'addPet'
  });

  $urlRouterProvider.otherwise('/stores');
}
