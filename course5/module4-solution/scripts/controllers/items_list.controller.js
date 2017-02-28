(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('itemsListController', itemsListController)

  itemsListController.$inject = ['category']
  function itemsListController(category) {
    this.category = category;
  }
})()
