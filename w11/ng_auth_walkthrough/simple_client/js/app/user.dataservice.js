(function() {
  "use strict";

  angular
    .module("rafiki")
    .factory("userDataService", userDataService);

  userDataService.$inject = ["$log", "$http"];

  function userDataService($log, $http) {
    var user = {
      email:    "pj@ga.co",
      name:     "Phil",
      password: "12345",
      dob:      new Date("01/01/1990"),
      create:   create,
      clear:    clear,
    };

    return user;

    function create() {
      $log.debug("Attempting to create user:", user);

      return $http({
        method: "POST",
        url:    "http://localhost:3000/api/users",
        headers: {"Content-Type": "application/json"},
        data: angular.toJson({
          email:    user.email,
          name:     user.name,
          password: user.password,
          dob:      user.dob.toISOString()
        })
      });
    }

    function clear() {
      user.email    = "";
      user.name     = "";
      user.password = "";
      user.dob      = "";
    }
  }

})();
