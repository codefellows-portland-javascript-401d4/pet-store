routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'Stores',
      url: '/stores',
      component: 'header',
      resolve: {
        storeList: ['storeService', s => {
          return s.getStores();
        }]
      }
    })
    .state({
      name: 'Stores.all',
      url: '/all',
      component: 'stores'
    })
    .state({
      name: 'Stores.addStore',
      url: '/add',
      component: 'addStore'
    });
  $stateProvider
    .state({
      name: 'Store',
      url: '/store',
      component: '',
      resolve: {
        id: ['$transitions$', t => t.params().id]
      }
    })
    .state({
      name: 'Store.pets',
      url: '/pets',
      component: 'pets'
    })
    .state({
      name: 'Store.addPet',
      url: '/add',
      component: 'addPet'
    });
  $urlRouterProvider.otherwise('/');
}