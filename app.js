(function(){
'use strict';
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    $scope.toBuyList = ShoppingListCheckOffService.getToBuy();
    $scope.addToList = function(index){
      ShoppingListCheckOffService.addToList(index);
    }
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    $scope.boughtList = ShoppingListCheckOffService.getList();
  }
  function ShoppingListCheckOffService() {
    var toBuyList = [
      {
        "name": "cookies",
        "quantity": "10"
      },
      {
        "name": "apples",
        "quantity": "8"
      },
      {
        "name": "ice cream",
        "quantity": "12"
      },
      {
        "name": "banana",
        "quantity": "18"
      },
      {
        "name": "milk",
        "quantity": "1"
      }
    ];

    var BoughtItems = [];
    this.addToList = function(index) {
      BoughtItems.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    }
    this.getList = function(){
      return BoughtItems;
    }
    this.getToBuy = function() {
      return toBuyList;
    }
  }
})();

