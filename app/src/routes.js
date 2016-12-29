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
      add: ['storeService', (stores) => {
        return stores.add;
      }]
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

  $stateProvider.state({
    name: 'store',
    url: '/store/:id',
    abstract: true,
    default: '.pet',
    resolve: {
      store: ['storeService', '$transition$', (stores, t) => {
        return stores.getId(t.params().id);
      }],
      pets: ['store', store => store.pets]
    },
    views: {
      store: {
        component: 'pet'
      }
    }
  });

  $stateProvider.state({
    name: 'store.pet',
    url: '/pet',
  });

  $stateProvider.state({
    name: 'store.newPet',
    url: '/new',
    resolve: {
      add: ['petService', (pet) => {
        return pet.add;
      }]
    },
    component: 'newPet'
  });

  $urlRouterProvider.otherwise('/');
}