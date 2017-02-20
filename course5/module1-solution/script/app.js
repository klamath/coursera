(function(){
  'use strict'

  angular.module('LunchCheck', [])
          .controller('LunchCheckController', checkLunch);

  checkLunch.$inject = ['$scope']

  function checkLunch($scope){
    $scope.items = '';
    $scope.status = '';
    $scope.cssModificator = ''


    $scope.checkCount = function(){
      if ($scope.items == ''){
        $scope.status = 'Please enter data first';
        $scope.cssModificator = 'status--warning';
      } else {
        var words = $scope.items.split(',').filter(function(word){ return word != '' && word != ' '});
        console.log('words: ', words);
        if (words.length <= 3){
          $scope.status = 'Enjoy!';
          $scope.cssModificator = 'status--ok';
        } else {
          $scope.status = 'Too much!';
          $scope.cssModificator = 'status--ok';
        }
      }
    };
  }
})();
