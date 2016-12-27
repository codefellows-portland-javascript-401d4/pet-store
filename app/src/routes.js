routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider /*$urlRouterProvider*/) {

  $stateProvider.state({
    name: 'stores',
    url: '/store',
    resolve: {
      stores: ['storeService', stores => stores.get()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name:'stores.add',
    url: '/add',
    component: 'addStore'
  });

  $stateProvider.state({
    name: 'store',
    url: 'store/:id',
    resolve: {
      store: ['storeService', '$transition$', (store, t) => {
        return store.getId(t.params().id);
      }]
    },
    component: 'store'
  });

  $stateProvider.state({
    name:'store.addPet',
    url: '/add-pet',
    component: 'addPet'
  });

  $stateProvider.state({
    name: 'welcome',
    url: '/welcome',
    component: 'welcome'
  });

  // $urlRouterProvider.otherwise('/store');
}

