angular.module("myApp",[])
.controller("myfirstController",['$scope',function($scope){
    console.log("This is a form controller");
    $scope.hello="hello world";

}]);
