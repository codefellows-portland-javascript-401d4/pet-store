// $http is Angular's built-in AJAX library
storeService.$inject = ['$http', 'apiUrl'];

// $http gets injected
export default function storeService($http, apiUrl) {
    return {
        get(id) {
            if(!id) return this.getAll();
            return $http.get(`${apiUrl}/stores/${id}`)
                .then(res => res.data);
        },
        getAll() {
            return $http.get(`${apiUrl}/stores`)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/stores/${id}`)
                .then(res => res.data);
        },
        add(album) {
            return $http.post(`${apiUrl}/stores`, album)
                .then(res => {
                    return res.data;
                });

        }
               
    };
}
