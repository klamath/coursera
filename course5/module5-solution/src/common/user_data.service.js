(function () {
  "use strict";

  angular.module('common')
  .service('UserDataService', UserDataService);

  UserDataService.$inject = ['$http', 'ApiPath'];
  function UserDataService($http, ApiPath) {
    var service = this;
    service.user = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      dish: ''
    };

    service.setUser = function (attributes) {
      service.user = attributes;
    }

    service.getUser = function () {
      return this.user;
    };

    service.checkMenuItem = function(shortName){
      var getOptions = {
        url: ApiPath + '/menu_items/' + shortName + '.json',
        method: 'GET'
      }
      return $http(getOptions)
    };
  };
})();
