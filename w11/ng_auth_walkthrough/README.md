# Angular Authentication with JWTs (JSON Web Tokens)

This lab is meant to help us:

1.  Create a new user.
2.  Login. This sends credentials (email & password) to the server,
    who generatea a JWT and returns it.
3.  Store this in `localStorage`.
4.  Attach the token to all future requests.
     - intercept requests and "sign" them, by setting the header to 
       `Authorization: Bearer …`.

Make sure you are running the code in `server`!

### Part 1

**Begin with the `simple_client`.**

1.  Create a `userDataService` and bind it to the `#user` form. Test it.
2.  Add a method `create` to you user data service, that uses `$http` to 
    create a user based on it. Given the return value, update the view 
    (success or failure). (As a bonus, use 
    [Angular form directives][ng-forms] to validate before sending.)
3.  Add a method to your user data service, `clear`, that resets your
    user data after a correct submission.
4.  Create a `tokenService` with the methods `set`, `get` and `clear`. (As
    a bonus, use the [jwt-decode][dec] library to decode it, so that you
    can add the method `isExpired`.)
5.  Create an `authService` with the methods `logIn` and `logOut`, and the
    property `isLoggedIn`. Inject into it `$http` (for logging in), and
    `tokenService`. To log out, delete the token. To check if you are
    logged in, see if a token exists!
6.  Create a `tokenSigningService` service in order to "sign" requests
    with the token. This service should look like:

    ```javascript
    // requisite boilerplate

    function tokenSigningService(tokenService) {
      return {
        request: signWithToken
      };
      
      function signWithToken(request) {
        var token = tokenService.get();
        if (token) {
          request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
      }
    }
    ```
7.  "Intercept" `$http` with the `tokenSigningService`. You must, during
    configuration, tell `$http` to run this service on requests. You do
    this by adding to your configuration:

    ```javascript
    angular
      .module("app")
      .config(configure);

    configure.$inject = ["$httpProvider"];

    function configure($httpProvider) {
      $httpProvider.interceptors.push("tokenSigningService");
    }
    ```
8.  Add to the `authService` a `getCurrentUser` method that calls 
    `/api/me` and returns the current user's data from the API.

### Part 2

Now, with the `complex_client`, implement a full Angular authentication
using JWTs following the above workflow!

**Further reading:**

- http://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543
- https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/
- https://leanpub.com/mean-machine

<!-- LINKS -->

[dec]:      https://github.com/auth0/jwt-decode
[ng-forms]: https://scotch.io/tutorials/angularjs-form-validation
