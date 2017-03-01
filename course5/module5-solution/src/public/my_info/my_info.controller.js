(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserDataService'];
  function MyInfoController(UserDataService) {
    var $ctrl = this;
    $ctrl.user = UserDataService.getUser();
  }
})();
