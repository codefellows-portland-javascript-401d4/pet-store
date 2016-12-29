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
      default: '.pets',
      abstract: true,
      url: '/store/:id',
      resolve: {
        store: ['storeService', '$transition$', (s, $t) => {
          return s.getStore($t.params().id); 
        }]
      },
      component: 'store'
    })
    .state({
      name: 'store.pets',
      url: '/pets',
      resolve: {
        pets: ['storeService', s => {
          return s.getPets(); 
        }]
      },
      component: 'pets'
    })
    .state({
      name: 'store.addPet',
      url: '/add',
      component: 'addPet'
    });
  $urlRouterProvider.otherwise('/');
}