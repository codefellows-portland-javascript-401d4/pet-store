routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url: '/',
    data: {
      public: true
    },
    views:{
      welcome: {
        component: 'welcome'
      }
    }
  });

  $stateProvider.state('home', {
    url: '/home',
    resolve: {
      stores: ['storeService', stores => stores.get()],
      add: ['storeService', storeService => storeService.add]
    },
    views: {
      stores: {
        component: 'stores'
      },
      newstore: {
        component: 'newStore'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}