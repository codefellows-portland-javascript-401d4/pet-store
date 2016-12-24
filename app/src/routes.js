routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'stores',
    url: '/store',
    resolve: {
      stores: ['storeService', stores => stores.get()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.store',
    url: '/:id',
    resolve: {
      id: ['$transition$', t => t.params().id]
    },
    component: 'stores'
  });

  $urlRouterProvider.otherwise('/store');
}

