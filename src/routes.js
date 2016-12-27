routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    abstract: true,
    default: '.all',
    resolve: {
      stores: ['storeService', stores => stores.getAll()]
    },
    component: 'stores'
  });

  $stateProvider.state({
    name: 'stores.all',
    url: '/all',
    component: 'storesAll'
  });

  $stateProvider.state({
    name: 'stores.add',
    url: '/add',
    component: 'storesAdd'
  });

  $stateProvider.state({
    name: 'store',
    url: '/store/:id',
    abstract: true,
    default: '.pets',
    // resolve: {
    //   paramId: ['$transition$', t => t.params().id],
    //   store: ['stores', 'paramId', (stores, id) => stores.find(store => store._id === id)]
    // },
    resolve: {
      store: ['$transition$', 'storeService', (t, stores) => {
        return stores.getOne(t.params().id);
      }]
    },
    component: 'store'
  });

  $stateProvider.state({
    name: 'store.pets',
    url: '/pets',
    component: 'storePets'
  });

  $stateProvider.state({
    name: 'store.addPet',
    url: '/add-pet',
    component: 'addPet'
  });


  $urlRouterProvider.otherwise('/stores/all');

}