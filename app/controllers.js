"use strict";

angular.module("gordonApp", [
    "ui.router",
    "gordonApp.face"
])

.config(function($stateProvider) {
    $stateProvider
        .state('gordon', {
            url: "/",
            templateUrl: "app/main.html",
            controller: "gordonCtrl"
        });
})

.controller("gordonCtrl", function($scope, $http) {

    $scope.top = "Top Lip.";
    $scope.bottom = "Bottom Lip.";

});
