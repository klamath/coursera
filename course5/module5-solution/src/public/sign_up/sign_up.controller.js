(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserDataService'];
  function SignUpController(UserDataService) {
    var $ctrl = this;
    $ctrl.user = UserDataService.getUser();
    $ctrl.menuItemValid = null;
    $ctrl.userSaved = null;

    $ctrl.resetMenuItemValidation = function (){
      $ctrl.menuItemValid = null;
    };

    $ctrl.saveUser = function () {
      UserDataService.setUser($ctrl.user);
      $ctrl.userSaved = true;
    }

    $ctrl.checkMenuItem = function(shortName){
      if ($ctrl.user.dish !== '') {
        UserDataService.checkMenuItem($ctrl.user.dish).then(
          function(result){
            $ctrl.user.menuItem = result.data;
            $ctrl.menuItemValid = true;
          },
          function (result) {
            $ctrl.menuItemValid = false;
          }
        );
      }
      else {
        $ctrl.menuItemValid = false;
      }
    }
  }
})();
