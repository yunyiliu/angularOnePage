(function(){

  angular.module('app',[])

  .controller('firstController', function($scope){
    $scope.name = "";
    $scope.res = "Please enter data first";
    $scope.showRes = function() {
      var arrs = $scope.name.split(',');
      var count = 0;
      for( i = 0; i < arrs.length; i++) {
         count++;
      }
      if(count === 0 || $scope.name === "") {
        $scope.res =  "Please enter data first";
      } else if(count <= 3 && count != 0) {
        $scope.res = "Enjoy!";
      } else {
        $scope.res = "Too much!";
      }
    };
  });
})();

