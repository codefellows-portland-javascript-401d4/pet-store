storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http/*, apiUrl*/) {
  return {
    getAll() {
      return $http.get('api/unauth/stores')
        .then(res => res.data);
    }
  };
}