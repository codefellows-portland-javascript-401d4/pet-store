storeService.$inject = [ '$http', 'apiUrl' ];

export default function storeService($http, apiUrl) {
  return {
    get(storeId) {
      if (!storeId) {
        return this.getAll();
      }
      else {
        return $http.get(`${apiUrl}/stores/${storeId}`).then(res => res.data);
      }
    },
    getAll() {
      return $http.get(`${apiUrl}/stores`).then(res => res.data);
    },
    remove(storeId) { // eslint-disable-line no-unused-vars
      return $http.delete(`${apiUrl}/stores/${storeId}`).then(res => res.data);
    },
    add(store) {
      return $http.post(`${apiUrl}/stores`, store).then(res => res.data);
    }
  };
}