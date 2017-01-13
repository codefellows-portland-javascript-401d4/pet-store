routes.inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name:'stores',
    url: '/stores',
    component: 'stores',
    resolve: {
      stores: ['storeService', (stores) => {
        return stores.getAll();
      }
      ]
    }
  });

  $stateProvider.state({
    name:'stores.all',
    url: '/all',
    views: {
      all: {
        component: 'storesAll'
      }
    }
  });


  $stateProvider.state({
    name: 'stores.add',
    url: '/add',
    views: {
      all: {
        component: 'storeNew'
      }
    }
  });

  $stateProvider.state({
    name: 'stores.detail',
    url: '/:id',
    params: {
      view: { dynamic: true }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      view: ['$transition$', t => t.params().view || 'detail']
    },
    views: {
      all: {
        component: 'storeDetail'
      }
    }
  });

  $stateProvider.state({
    name: 'store.pets',
    url: '/pets',
    component: 'pets'
  });

  $stateProvider.state({
    name: 'store.newPet',
    url: '/add-pet',
    component: 'petNew'
});

  $urlRouterProvider.otherwise('/');
}