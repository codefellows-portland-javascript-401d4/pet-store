petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/pets`)
        .then(res => res.data);
    },

    get(id) {
      return $http.get(`${apiUrl}/pets/${id}`)
      .then(res => res.data);
    },

    add(pet) {
      return $http.post(`${apiUrl}/pets`, pet)
      .then(res => res.data);
    }
  };
}