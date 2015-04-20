"use strict";

angular.module('gordonApp.face').directive("eye", function() {
    return {
    	scope: {
    		isolatedSentence: '=sentence'
    	},
        restrict: "E",
        template: "<span id='{{isolatedSentence}}'>eye</div>",
    }
});
