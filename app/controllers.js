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

    $scope.left = "leftEye";
    $scope.right = "rightEye";

    $scope.word = "wordsForMouth";

    audioService('No thanks, Im full.');

}]);
