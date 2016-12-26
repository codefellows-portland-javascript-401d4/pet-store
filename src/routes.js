routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    default: '.all',
    resolve: {
      stores: ['storeService', storeService => storeService.getAll()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.all',
    url: '/all',
    component: 'storesAll'
  });

  // $stateProvider.state({
  //   name: 'stores.add',
  //   url: '/',
  //   component: 'store'
  // });

  // $stateProvider.state({
  //   name: 'store',
  //   url: '/stores/:id',
  //   component: 'store'
  // });

  // $stateProvider.state({
  //   name: 'store.pets',
  //   url: '/stores/:id',
  //   component: 'store'
  // });

  // $stateProvider.state({
  //   name: 'store.addPet',
  //   url: '/stores/:id',
  //   component: 'store'
  // });


  $urlRouterProvider.otherwise('/');

}