(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('categoriesListController', categoriesListController)

  categoriesListController.$inject = ['items']
  function categoriesListController(items) {
    this.items = items;
  }
})()
