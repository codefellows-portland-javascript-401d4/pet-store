petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
  return {
    get(storeId) {
      return $http.get(`${apiUrl}/stores/${storeId}`)
        .then(res => res.data);
    }
    // add(storeId, pet) {
    //   return $http.post(`${apiUrl}/stores/${storeId}`, pet)
    //     .then(res => res.data);
    // }
  };
}