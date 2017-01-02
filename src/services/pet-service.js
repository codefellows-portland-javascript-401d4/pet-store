petService.$inject = [ '$http', 'apiUrl' ];

export default function petService( $http, apiUrl ) {
  return {

    getPets() {
      console.log('In getPets');
      return $http.get( `${apiUrl}/pets` )
      .then( res => res.data );
      
    },

    add( pet ) {
      return $http.post( `${apiUrl}/pets`, pet )
      .then( res => res.data );

    }
  };
}