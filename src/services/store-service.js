storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/stores`)
        .then(res => res.data);
    },
    getOne(id) {
      return $http.get(`${apiUrl}/stores/${id}`)
        .then(res => res.data);
    },
    addStore(store) {
      return $http.post(`${apiUrl}/stores`, store)
        .then(res => res.data);
    }

  };
}