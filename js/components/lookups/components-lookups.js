"use strict";

angular.module('components-lookups', [])
    .directive('subscribedMatters', function(){
        return{
            restrict:'C',
            templateUrl:'templates/components/lookups/subscribed-matters.html'
        }
    })
;