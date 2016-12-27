storeService.$inject = ['$resource', 'apiUrl'];

export default function storeService($resource, apiUrl) {
	return $resource(`${apiUrl}/stores/:id`, { id: '@_id' });
}