/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myApp = angular.module("MyApp", []);

var helloController = function ($scope) {
    $scope.message = "Heloo";
};

myApp.controller("helloController", function ($scope) {
    $scope.message = "Hi";
});

myApp.controller("dataRepeaterController", function($scope){
   var employees = [
       {firstName:"Anoop", lastName:"K", gender:"Male", salary:20000},
       {firstName:"Ajesh", lastName:"K", gender:"Male", salary:30000},
       {firstName:"Sajesh", lastName:"K", gender:"Male", salary:40000},
       {firstName:"Jayachandran", lastName:"K", gender:"Male", salary:50000},
       {firstName:"Shobha", lastName:"VK", gender:"Female", salary:10000},
       {firstName:"Niharika", lastName:"K", gender:"Female", salary:5000}
   ]; 
   
   $scope.employees = employees;
});

myApp.controller("countryController", function($scope){
    var countries = [
        {name:"India",
         cities:[{name:"Trivandrum"},{name:"Mumbai"},{name:"Delhi"}
         ]},
     
        {name:"UK",
         cities:[{name:"Manchster"},{name:"Liverpool"},{name:"London"}]}
    ];
    
    $scope.countries = countries;
});