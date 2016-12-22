petService.$inject = ['$resource', 'apiUrl'];

export default function petService($resource, apiUrl) {
    return $resource(`${apiUrl}/pets/:id`, { id: '@_id' });
}