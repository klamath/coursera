(function(){
  angular.module('MenuApp')
  .component('items', {
    templateUrl: './scripts/components/templates/items.html',
    bindings: {
      items: '<',
      handleClick: '&'
    }
  });
})()
