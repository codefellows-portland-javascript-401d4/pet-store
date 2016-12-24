// $http is Angular's built-in AJAX library
petService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function petService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/pets`)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/pets/${id}`)
                .then(res => res.data);
        },
        add(image) {
            return $http.post(`${apiUrl}/pets`, image)
                .then(res => res.data);
        }
    };
}
