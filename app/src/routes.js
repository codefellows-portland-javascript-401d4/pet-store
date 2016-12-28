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
    resolve: {
      stores: ['storeService', stores => stores.getAll()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'store',
    url: '/stores/:id',
    resolve: {
      store: ['storeService', '$transition$', (stores, t) => stores.get(t.params().id)]
    },
    component: 'store'
  });

  $urlRouterProvider.otherwise('/');
}