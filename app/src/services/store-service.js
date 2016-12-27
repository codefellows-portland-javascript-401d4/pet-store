storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/unauth/stores`)
        .then(res => res.data);
    },

    add(store) {
      return $http.post(`${apiUrl}/unauth/stores`, store)
        .then(res => res.data);
    },

    getId(id) {
      return $http.get(`${apiUrl}/unauth/stores/${id}`)
        .then(res => res.data);
    }
  };
}