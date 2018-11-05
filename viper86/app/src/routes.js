routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    default: '.all',
    resolve: {
      stores: ['storeService', stores => stores.getAll()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.all',
    url: '/all',
    component: 'allStores'
  });

  $stateProvider.state({
    name: 'stores.newStore',
    url: '/add-store',
    component: 'newStore'
  });

  $stateProvider.state({
    name: 'store',
    url: '/:id',
    abstract: true,
    default: '.stores',
    resolve: {
      store: ['storeService', '$transition$', (stores, t) => stores.get(t.params().id)]
    },
    component: 'store'
  });

  $stateProvider.state({
    name: 'store.pets',
    url: '/pets',
    component: 'pets'
  });

  $stateProvider.state({
    name: 'store.newPet',
    url: '/add-pet',
    component: 'newPet'
  });

  $urlRouterProvider.otherwise('/');
}