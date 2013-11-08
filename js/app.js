"use strict";
angular.module('mfia', [
        'ngRoute',
//    'services-common',
    'components-common'
//    'components-lookups',
//    'controllers-common'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'templates/content/main.html'
            })
//            .when('/signin', {
//                templateUrl: 'templates/content/sign-in.html'
//            })
//            .when('/css', {
//                templateUrl: 'templates/content/css.html'
//            })
//            .when('/chart', {
//                templateUrl: 'templates/content/chart.html'
//            })
//            .when('/matter-info', {
//                templateUrl: 'templates/content/matter-info.html'
//            })
//            .when('/matter-overview-life-to-date', {
//                templateUrl: 'templates/content/matter-overview-life-to-date.html'
//            })
//            .when('/work-in-progress', {
//                templateUrl: 'templates/content/work-in-progress.html'
//            })
//            .when('/unpaid-invoices', {
//                templateUrl: 'templates/content/unpaid-invoices.html'
//            })
            .otherwise({redirectTo: '/main'});
    }])
    .controller('appCtrl', function ($scope) {
    $scope.name = 'AppCtrl'

})
;