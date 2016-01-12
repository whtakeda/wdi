(function() {
  "use strict";

  angular
    .module("rafiki")
    .controller("MainController", MainController);

  MainController.$inject = ["$log", "userDataService","tokenService", "authService"];

  function MainController($log, userDataService, tokenService, authService) {
    var vm = this;

    vm.user = userDataService;
    vm.token = tokenService;
    vm.auth = authService;
    vm.successMessage = "Present all of the current user's data here.";
    vm.failureMessage = "Present any error messages here.";

    vm.login = {
      email: "pj@ga.co",
      password: "12345"
    }

    vm.loginUser = function() {
      var pr = vm.auth.logIn(vm.login);
    }

    vm.logoutUser = function() {
      vm.auth.logOut();
    }

    vm.createUser = function() {
      var pr = vm.user.create();

      pr.then(
        function(data, status, headers, config) {
          $log.log("SUCCESS", data);

          vm.successMessage = angular.toJson(data.data);
          vm.failureMessage = "Present any error messages here.";
          vm.user.clear();
        },
        function(data, status, headers, config) {
          $log.log("FAILURE", data);

          vm.successMessage = "Present all of the current user's data here.";
          vm.failureMessage = angular.toJson(data.data);
        }
      );
    }
  }

})();
