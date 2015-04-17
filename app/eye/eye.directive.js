"use strict";

angular.module('gordonApp.face').directive("eye", function() {
    return {
    	scope: {
    		isolatedSentence: '=sentence'
    	},
        restrict: "E",
        template: "<div id='{{isolatedSentence}}'></div>",
    }
});
