"use strict";

angular.module("gordonApp", [
    "ui.router",
    "gordonApp.face"
])

.config(function($stateProvider) {
    $stateProvider
        .state('gordon', {
            url: "/",
            templateUrl: "app/main.html"
        });
})

.controller("gordonCtrl", ['$scope', '$http', 'audioService', 

	function($scope, $http, audioService) {

    $scope.top = "Top.";
    $scope.bottom = "Bottom.";

    audioService('No thanks, Im full.');

}]);
