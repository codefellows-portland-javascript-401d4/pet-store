storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/stores`)
        .then(res => res.data);
    },

    get(id) {
      return $http.get(`${apiUrl}/stores/${id}`)
      .then(res => res.data);
    },

    add(store) {
      return $http.post(`${apiUrl}/stores`, store)
      .then(res => res.data);
    }
  };
}