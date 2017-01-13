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
        component: 'newStore'
      }
    }
  });

  $stateProvider.state({
    name: 'stores.detail',
    // the url, plus implied params id and view
    url: '/:id',
    params: {
      // "view" same key as above
      view: { dynamic: true }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      // "view" is name of component binding,
      // t.params().view is dependent on key above
      view: ['$transition$', t => t.params().view || 'detail']
      // crew: ['$transition$', 'crewService', (t, crews) => {
      //     return crews.get(t.params().id);
      // }]
    },
    views: {
      all: {
        component: 'storeDetail'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}