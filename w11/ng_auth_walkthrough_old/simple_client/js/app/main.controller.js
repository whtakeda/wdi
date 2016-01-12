(function(){
  'use strict';

  angular
    .module("app")
    .controller("MainController",MainController);

  MainController.$inject = ["$log","usersDataService"];

  function MainController($log,usersDataService)
  {
    var vm = this;

    vm.user = usersDataService;

    vm.createUser = function() {
      var newUser = vm.user.create();

      newUser.then(function(res){
        $log.log(res);
        vm.userData = res.data.data;
        vm.error = "";
      },function(err){
        $log.log(err);
        vm.error = err.data.response + ": " + err.data.message;
        vm.userData = "";
      })
    }
  }

})();
