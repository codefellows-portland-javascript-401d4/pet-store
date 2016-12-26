petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
    return {
        add(image) {
            return $http
                .post(`${apiUrl}/pets`, image)
                .then(res => res.data);
        },
        remove(id) {
            return $http
                .delete(`${apiUrl}/pets/${id}`)
                .then(res => res.data);
        }
    };
};