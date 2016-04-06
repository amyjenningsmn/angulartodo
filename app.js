var app = angular.module('toDo', []);

app.controller('MainController', function($scope) {
  $scope.runClick = function(){
}

 $scope.items = [];

 $scope.getItems = function() {
   $scope.items.push($scope.listItem);
 }

})
