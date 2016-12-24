routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    component: 'stores' 
  });

  $stateProvider.state({
    name: 'stores.add',
    url: '/add',
    component: 'storesAdd'
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
            // store: ['$transition$', 'storeService', (t, stores) => {
            //     return stores.get(t.params().id);
            // }]
    },
    component: 'storesDetail'
  });

// 	 $stateProvider.state({
//    name: 'store.pets',
//    url: '/store',
//    component: 'store' 
//  });

  $stateProvider.state({
    name: 'pets.add',
    url: '/pets/add',
    component: 'petsAdd' 
  });

  $urlRouterProvider.otherwise('/stores');
}