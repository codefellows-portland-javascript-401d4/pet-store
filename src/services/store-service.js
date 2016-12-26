storeService.$inject = ['$http', 'apiUri'];

export default function storeService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/stores`)
        .then(res => res.data);
    }
  };
}