storeService.$inject = ['$resource', 'apiUrl'];

export default function storesService($resource, apiUrl) {
    return $resource(`${apiUrl}/stores/:id`, { id: '@_id' });
}