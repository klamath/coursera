(function () {
  'use strict'
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('baseApiPath', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'baseApiPath']
  function MenuDataService($http, baseApiPath) {
    var menuData = this;

    menuData.getAllCategories = function () {
      var getOptions = {
        url: baseApiPath + 'categories.json',
        method: 'GET'
      };
      return $http(getOptions).then(
        function(responce){
          return responce.data;
        }
      );
    }

    menuData.getItemsForCategory = function (categoryShortName) {
      var getOptions = {
        url: baseApiPath + 'menu_items.json',
        params: {category: categoryShortName},
        method: 'GET'
      };

      return $http(getOptions).then(
        function(responce){
          return responce.data;
        }
      );
    }
  }
})()
