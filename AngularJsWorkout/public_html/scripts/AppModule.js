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