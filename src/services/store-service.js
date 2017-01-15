storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http) {
  return {
    getAll() {
      return $http.get('https://pet-store-401.herokuapp.com/api/unauth/stores')
        .then(res => res.data);
    },

    get(id) {
      return $http.get(`https://pet-store-401.herokuapp.com/api/unauth/stores/${id}`)
      .then(res => res.data);
    },

    add(store) {
      return $http.post('https://pet-store-401.herokuapp.com/api/unauth/stores', store)
      .then(res => res.data);
    }
  };
}