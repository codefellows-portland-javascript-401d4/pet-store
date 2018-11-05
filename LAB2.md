![cf](http://i.imgur.com/7v5ASc8.png) Pet Store Auth
===

* Pairing encouraged (unless you feel _very_ solid in angular routing and components)
* Data API:
  * Access via:
    * `https://pet-store-401.herokuapp.com/api`, or
    * git clone [`https://github.com/martypdx/pet-store-server`](https://github.com/martypdx/pet-store-server)
  * Added Auth endpoints:
    * GET `/api/auth/verify` (returns `{ sucess: true|false }`)
    * POST `/api/auth/signin` (returns `{ token: <token> }`)
    * POST `/api/auth/signup` (returns `{ token: <token> }`)
<<<<<<< HEAD
  * If you need unauthed routes for previous assignment, they are available at `/api/unauth/<resource>`
=======
>>>>>>> c9024fd53a6cd888f9a865252133cbab4fa610ce
  * Token passed via header: `Authorization: Bearer <token>`

## New Welcome/Home State

Optional: Add a welcome or home state that does not require auth, and has a call to action for main page

### User Auth

* Token and User Services
* `app.run` with subscription to `$stateChangeStart`
* Configure states to tell which need auth
* `app.config` with http interceptor
* Model Dialog or state for signin/signup
  * Associated components for sign in/up
<<<<<<< HEAD
  * ngDialog will require css, make sure webpack config handles straight css
=======
>>>>>>> c9024fd53a6cd888f9a865252133cbab4fa610ce
* logout link

  
## Rubric *10pts*

* Services *3pts*
* Setup routes, http, and auth (run via `$stateChangeStart`) *3pts*
<<<<<<< HEAD
* Works Correctly *4pts*
=======
* Works Correctly *4pts*
<<<<<<< HEAD
>>>>>>> 5e9b5f02d873afe557a94676f5a762bcada399c1
=======
>>>>>>> c9024fd53a6cd888f9a865252133cbab4fa610ce
>>>>>>> gnkatchmar
