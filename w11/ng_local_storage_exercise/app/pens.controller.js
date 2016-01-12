(function(){
  "use strict";

  angular
    .module("app")
    .controller("PensController", PensController);

  PensController.$inject = ["$log", "$window"];

  function PensController($log, $window){
    var vm = this;

    vm.data = {
      pens:[]
    };
    vm.newPen = "";
    vm.storage = $window.localStorage;
    vm.submit = submit;
    vm.clear = clear;
    vm.remove = remove;

    function submit() {
      vm.data.pens.push(vm.newPen)
      vm.newPen = "";
      save("memories",vm.data.pens);
    }

    function clear() {
      vm.storage.removeItem("memories");
      vm.newPen = "";
      vm.data.pens = "";
    }

    function remove(val){
      vm.data.pens = vm.data.pens.filter(function(pen){
        return pen !== val;
      })
      save("memories",vm.data.pens);
    }

    function save(key,value) {
      vm.storage.setItem(key, JSON.stringify(value));
    }

    vm.data.pens = JSON.parse(vm.storage.getItem("memories"));
    if (vm.data.pens == null) {
      vm.data.pens = [];
    }



  }

})();
