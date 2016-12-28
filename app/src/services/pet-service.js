petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
  return {
    get(id) {
      return $http.get(`https://pet-store-401.herokuapp.com/api/unauth/stores/${id}`)
      .then(res => res.data);
    }
  };
}