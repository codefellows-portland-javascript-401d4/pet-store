routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'stores',
      url: '/stores',
      component: 'stores',
      abstract: true,
      default: '.all',
      resolve: {
        storeList: ['storeService', s => {
          return s.getStores();
        }]
      }
    })
    .state({
      name: 'stores.all',
      url: '/all',
      component: 'allStores'
    })
    .state({
      name: 'stores.add',
      url: '/add',
      component: 'addStore'
    });

  $stateProvider
    .state({
      name: 'store',
      url: '/store/:id',
      component: 'store',
      default: '.pets',
      resolve: {
        id: ['$transition$', t => t.params().id],
        store: ['storeService', '$transition$', (s, $t) =>
          s.getStore({id : $t.params().id}) ]
      }
    })
    .state({
      name: 'store.pets',
      url: '/pets',
      component: 'pets'
    })
    .state({
      name: 'store.addPet',
      url: '/add',
      component: 'addPet'
    });
  $urlRouterProvider.otherwise('/');
}