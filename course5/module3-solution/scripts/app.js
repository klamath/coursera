(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.found = [];
    ctrl.searchTerm = '';
    ctrl.searchPerformed = null;
    ctrl.search = function(){
      ctrl.searchPerformed = false;
      if(this.searchTerm !== ''){
        MenuSearchService.getMatchedMenuItems(this.searchTerm).then(function (result) {
          ctrl.searchPerformed = true;
          ctrl.found = result;
        });
      }
      else {
        ctrl.searchPerformed = true;
        ctrl.found = [];
      }
    };

    ctrl.onRemove = function(index){
      ctrl.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var itemsUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json';
    this.getMatchedMenuItems = function(searchTerm){
      return $http({method: 'GET', url: itemsUrl}).then(
        function (result) {
          // process result and only keep items that match
          var foundItems = [];
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (result.data.menu_items[i].description.indexOf(searchTerm.toLowerCase().trim()) !== -1){
              foundItems.push(result.data.menu_items[i]);
            }
          }

          // return processed items
          return foundItems;
        },
        function(){
          throw new Error('Error while fetching data from server');
        });
    };
  };

  function foundItems() {
    var ddo = {
      scope: {
        items: '<foundItems',
        removeItem: '&onRemove'
      },
      templateUrl: './scripts/templates/found_items.html',
      restrict: 'E'
    }
    return ddo;
  };
})()
