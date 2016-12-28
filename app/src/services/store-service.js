storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    getAll() {
      return $http.get('https://pet-store-401.herokuapp.com/api/unauth/stores')
        .then(res => res.data);
    },

    get(id) {
      return $http.get(`https://pet-store-401.herokuapp.com/api/unauth/stores/${id}`)
      .then(res => res.data);
    }
  };
}