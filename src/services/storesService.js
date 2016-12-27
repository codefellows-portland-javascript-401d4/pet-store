storesService.$inject = ['$http', 'apiUrl'];

export default function storesService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/stores`)
        .then(res => res.data);
    },
    get(storeId) {
      return $http.get(`${apiUrl}/stores/${storeId}`)
        .then(res => res.data);
    },
    add(store) {
      return $http.post(`${apiUrl}/stores`, store)
        .then(res => res.data);
    }
  };
}