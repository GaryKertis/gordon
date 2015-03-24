"use strict";

var gordonApp = angular.module("gordonApp", ["gordonApp.face"]);

gordonApp.controller("gordonCtrl", function ($scope, $http) {

$scope.top = "Top Lip.";
$scope.bottom = "Bottom Lip.";

});
