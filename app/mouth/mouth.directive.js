"use strict";

angular.module('gordonApp.face').directive("mouth", function() {
    return {
    	scope: {
    		isolatedSentence: '=sentence'
    	},
        restrict: "E",
        templateUrl: "app/mouth/mouth.directive.html",
    }
});
