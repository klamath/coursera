(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './scripts/templates/home.template.html'
    })
    .state('categoriesList', {
      url: '/categories',
      templateUrl: './scripts/templates/categories.template.html',
      controller: 'categoriesListController as categoriesCtrl',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories().then(function (result) {
            return result;
          });
        }]
      }
    })
    .state('itemsList', {
      url: '/items/{name}',
      templateUrl: './scripts/templates/items.template.html',
      controller: 'itemsListController as itemsCtrl',
      resolve: {
        category: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
          return MenuDataService.getItemsForCategory($stateParams.name).then(
            function(result){
              return result;
            }
          );

        }]
      }
    });
  };
})();
