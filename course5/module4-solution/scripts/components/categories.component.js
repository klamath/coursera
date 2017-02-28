(function(){
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: './scripts/components/templates/categories.html',
    bindings: {
      items: '<',
    }
  });
})()
