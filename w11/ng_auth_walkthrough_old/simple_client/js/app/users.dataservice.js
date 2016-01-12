(function(){
  'use strict';

  angular
    .module("app")
    .factory("usersDataService",usersDataService);

  usersDataService.$inject = ["$log","$http"];

  function usersDataService($log,$http)
  {
    var baseUrl = "http://localhost:3000/"

    var user = {
      name: "Wayne",
      email: "wayne@takeda.com",
      password: "12345",
      dob: new Date("12-25-1990"),
      create: create
    }


    function create()
    {
      user.dob = new Date(user.dob);
      var req = {
          method: 'POST',
          url: baseUrl + "api/users",
          headers: {
            'content-Type': "application/json"
          },
          data: angular.toJson({
            email: user.email,
            name: user.name,
            password: user.password,
            dob: user.dob
          })
      }

      return $http(req);
    }


    return user;
  }


})();
