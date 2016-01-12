(function() {
  "use strict";

  angular
    .module("app")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log"];

  // $state: a service provided by ui-router, we can call
  //         .go() on it to update ui-router's current state

  function LoginController($state, userDataService, $log) {
    var vm = this;

    vm.user   = userDataService;
    vm.logIn  = logIn;

    // Create an extra, local place to hold the login input
    // content as it is typed, so that it doesn't trigger a
    // login on the user data service the moment the first
    // letter is typed…
    vm.localUser = {
      email:    "",
      password: ""
    };

    function logIn(name) {
      $log.debug("Logging in:", vm.localUser.email);

      // Log in the user by updating the service's .email:
      vm.user.email          = vm.localUser.email;
      vm.user.password      = vm.localUser.password;
      vm.localUser.email     = "";
      vm.localUser.password = "";

      $state.go("user");
    }
  }

})();
