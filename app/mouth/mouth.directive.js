"use strict";

angular.module('gordonApp.face').directive("mouth", function() {

    return {
    	scope: {
    		isolatedSentence: '=sentence'
    	},
    	link: function($scope) {
    		$scope.teeth = [[0,1,2,3,4,5],[6,7,8,9,10,11]];
    	},
        restrict: "E",
        templateUrl: "app/mouth/mouth.directive.html",
    }
});
