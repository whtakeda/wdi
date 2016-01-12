(function() {
  "use strict";

  angular
    .module("app")

    // this "routes" file is really a configuration file, but
    // broken out separately and named routes to encapsulate
    // all of our route logic.
    .config(AppRoutes);

  // inject two services (services that can take configuration are known
  //   as "providers") that are defined in the ui-router module.
  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("index", {
        url: "/",
        templateUrl:  "/js/app/layout/index.html"
      })
      .state("login", {
        url: "/login",
        templateUrl:  "/js/app/user/login.html",
        controller:   "LoginController",
        controllerAs: "vm"
      })
      .state("user", {})

    // when there is no hash, this is the URL of the
    // state that we load
    $urlRouterProvider.otherwise("/");
  }

})();
