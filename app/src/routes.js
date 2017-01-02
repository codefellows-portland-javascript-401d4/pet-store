routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    default: '.all',
    resolve: {
      storesDirectory: ['storeService', stores => stores.getAllStores()]
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
    url: '/store/:id',
    abstract: true,
    default: '.pets',
    resolve: {
      id: ['$transition$', t => t.params().id],
      store: ['storeService', '$transition$', (s, t) => s.getStore({id: t.params().id})]
    },
    component: 'store'
  });

  $stateProvider.state({
    name: 'store.pets',
    url: './pets',
    component: 'storesPets'
  });

  $stateProvider.state({
    name: 'store.newPet',
    url: './new-pet',
    component: 'newPet'
  });

  $urlRouterProvider.otherwise('/stores');
}
