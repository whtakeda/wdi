(function() {
  "use strict";

  angular
      .module("app")
      .controller("NavController", NavController);

  // all of this is basically copied from the login controller,
  // but since the nav and login are in different states, it's
  // easiest for now to *repeat it* (ugh) here.
  // once we create an authService, then all of this logic will
  // be encapsulated in there.

  NavController.$inject = ["$state", "userDataService", "$log"];

  function NavController($state, userDataService, $log) {
    var vm = this;

    vm.user   = userDataService;
    vm.logOut = logOut;

    function logOut() {
      $log.debug("Logging out:", vm.user.email);

      vm.user.email = "";
      $state.go("index");
    }
  }

})();
