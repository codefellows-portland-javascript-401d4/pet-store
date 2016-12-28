storeService.$inject = ['apiUrl', '$http'];

export default function storeService(apiUrl, $http) {
// 	return $resource(`${apiUrl}/stores/:id`, { id: '@_id' });
// }

	return {
		get(id) {
			if(!id) return this.getAll();
			return $http.get(`${apiUrl}/stores/${id}`)
                .then(res => res.data);
		},
		getAll() {
			console.log('getting all stores');
			return $http.get(`${apiUrl}/stores`)
                .then(res => res.data);
		},
		remove(id) {
			return $http.delete(`${apiUrl}/stores/${id}`)
                .then(res => res.data);
		},
		add(store) {
			return $http.post(`${apiUrl}/stores`, store)
                .then(res => res.data);
		}
	};
}