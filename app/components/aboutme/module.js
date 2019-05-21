let myapp=angular.module("Myapp",[]);
let mycontroller=function($scope){
    $scope.message="HelloWorld";
}

myapp.controller("Mycontroller",mycontroller);

let JSONController=function($scope){
    let Student={
        FirstName :"Nandini",
        LastName :"Doppalapudi",
        Email : "Nandini@gmail.com"
    }
    $scope.Student=Student;
    
}
myapp.controller("Student",JSONController)