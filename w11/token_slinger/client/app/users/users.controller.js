(function(){
  "use strict";

  angular
    .module("app")
    .controller("UsersController", UsersController);

  UsersController.$inject = ["$log","$http","$window","usersDataService"];

  function UsersController($log,$http,$window,usersDataService){
    var vm = this;
    var baseUrl = "http://localhost:3000/"
    var token = "";
    var storage = $window.localStorage;

    vm.userData = {};
    vm.newUser = {
      name: "",
      email: "",
      password: "",
      dob: new Date
    };
    vm.submitUser = submitUser;
    vm.grantToken = grantToken;
    vm.loginUser = loginUser;

    vm.data = userDataService;

    function submitUser()
    {
      vm.newUser.dob = new Date(vm.newUser.dob);
      var req = {
          method: 'POST',
          url: baseUrl + "api/users",
          headers: {
            'content-Type': "application/json"
          },
          data: JSON.stringify(vm.newUser)
      }
      $http(req)
        .then(function(res){
        console.log(res.data)
        vm.userData = res.data.data;
        vm.error = "";
      },function(err){
        $log.log(err);
        vm.error = err.data.response + ": " + err.data.message;
        vm.userData = "";
      })
    }

    function grantToken()
    {
      $log.log("starting grant token...")
      $log.log({email: vm.user.email, password: vm.user.password})
      var req = {
          method: 'POST',
          url: baseUrl + "api/token",
          headers: {
            'content-Type': "application/json"
          },
          data: JSON.stringify({email: vm.user.email, password: vm.user.password})
      }
      $http(req)
        .then(function(res){
          $log.log("got grant token...")
          token = res.data.token;
          storage.setItem("token",JSON.stringify(token))
          loginUser();
      },function(err){
        $log.log(err);
        vm.error = err.data.response + ": " + err.data.message;
        vm.userData = "";
      })
    }

    function loginUser()
    {
      $log.log("starting login user...")
      var req = {
          method: 'GET',
          url: baseUrl + "api/me",
          headers: {
            'Authorization': "bearer " + token
          }
      }
      $http(req)
        .then(function(res){
          $log.log(res)
          $log.log("got login user...")
          vm.error = "";
          vm.userData = res.data.data;
          $log.log(vm.userData);
      },function(err){
        $log.log(err);
        vm.error = err.data.response + ": " + err.data.message;
        vm.userData = "";
      })
    }

  };

})();
