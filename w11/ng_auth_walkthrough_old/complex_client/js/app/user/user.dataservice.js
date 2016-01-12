(function() {
  "use strict";

  angular
    .module("app")
    .factory("userDataService", userDataService);

  userDataService.$inject = [];

  function userDataService() {
    var user = {
      email:       "",
      password:    "",
      displayName: displayName,
      isLoggedIn:  isLoggedIn
    };

    return user;

    /*
     * User data service methods.
     *
     * - user.displayName(): returns a user email to a maximum 8
     *                       characters.
     * - user.isLoggedIn(): returns whether or not there is a current
     *                      user.
     */
    function displayName() {
      return ((user.email.length <= 8) ? user.email : user.email.slice(0,8) + "…");
    }

    function isLoggedIn() {
      return user.email.length !== 0;
    }
  }

})();
