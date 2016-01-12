(function(){
  "use strict";

  angular
    .module("app")
    .factory("usersDataService", usersDataService);

  usersDataService.$inject = ["$log"];

  function usersDataService($log) {

    return {
    };
  }

})();
