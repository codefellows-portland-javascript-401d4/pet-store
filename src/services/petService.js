petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
  return {
    add(pet) {
      return $http.post(`${apiUrl}/pets`, pet)
        .then(res => res.data);
    }
  };
}