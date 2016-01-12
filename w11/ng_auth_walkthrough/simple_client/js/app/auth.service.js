(function() {
  "use strict";

  angular
    .module("rafiki")
    .factory("authService", authService);

  authService.$inject = ["$log", "tokenService","$http"];

  function authService($log, tokenService, $http) {
    var auth = {
      logIn: logIn,
      logOut: logOut,
      isLoggedIn: false
    };

    auth.isLoggedIn = (tokenService.get() !== null);

    return auth;

    function logIn(cred)
    {
      $log.log(cred)
      return $http({
        method: "POST",
        url: "http://localhost:3000/api/token",
        headers: { 'Content-Type': 'application/json'},
        data: angular.toJson(cred)
      }).then(function(res){
        $log.log(res)
        tokenService.set(res.data.token);
        auth.isLoggedIn = true;

        return res;
      },function(res){ $log.log(res)});
    }

    function logOut()
    {
      tokenService.clear();
      auth.isLoggedIn = false;
    }
  }

})();
