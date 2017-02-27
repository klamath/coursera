(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('DataStorage', DataStorage);

  ToBuyController.$inject = ['DataStorage'];
  function ToBuyController(DataStorage){
    this.items = DataStorage.getToBuyItems();

    this.buyItem = function(itemId){
      DataStorage.markItemAsBoght(itemId);
    };
  };

  AlreadyBoughtController.$inject = ['DataStorage'];
  function AlreadyBoughtController(DataStorage){
    this.items = DataStorage.getBoughtItems();
  };

  function DataStorage(){
    this._toBuyItems = [
      {id: 1, name: 'chips', quantity: 1 + Math.floor(Math.random() * 10)},
      {id: 2, name: 'cookies', quantity: 1 + Math.floor(Math.random() * 10)},
      {id: 3, name: 'apples', quantity: 1 + Math.floor(Math.random() * 10)},
      {id: 4, name: 'oranges', quantity: 1 + Math.floor(Math.random() * 10)},
      {id: 5, name: 'water', quantity: 1 + Math.floor(Math.random() * 10)},
      {id: 6, name: 'fish', quantity: 1 + Math.floor(Math.random() * 10)},
    ];
    this._boughtItems = [];

    this.getToBuyItems = function(){
      return this._toBuyItems;
    };

    this.getBoughtItems = function(){
      return this._boughtItems;
    };

    this.markItemAsBoght = function(itemId){
      for (var index = 0; index < this._toBuyItems.length; index++) {
        if (this._toBuyItems[index].id == itemId){
          var element = this._toBuyItems.splice(index, 1)[0];
          this._boughtItems.push(element);
          break;
        }
      }
    };
  }
})()
