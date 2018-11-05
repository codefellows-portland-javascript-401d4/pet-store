petsService.$inject = [ '$http', 'apiUrl' ];

export default function petsService($http, apiUrl) {
  return {
    get(petId) {
      if (!petId) {
        return this.getAll();
      }
      else {
        return $http.get(`${apiUrl}/pets/${petId}`).then(res => res.data);
      }
    },
    getAll() {
      return $http.get(`${apiUrl}/pets`).then(res => res.data);
    },
    remove(petId) { // eslint-disable-line no-unused-vars
      return $http.delete(`${apiUrl}/pets/${petId}`).then(res => res.data);
    },
    add(pet) {
      return $http.post(`${apiUrl}/pets`, pet).then(res => res.data);
    }
  };
}