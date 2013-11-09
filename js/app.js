"use strict";
angular.module('mfia', [
        'ngRoute',
    'services-common',
    'components-common'
//    'components-lookups',
//    'controllers-common'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'templates/content/main.html',
                controller: 'AppCtrl'
            })
            .when('/signin', {
                templateUrl: 'templates/content/sign-in.html',
                controller: 'AppCtrl'

            })
            .when('/reports', {
                templateUrl: 'templates/content/reports.html'
            })
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
    .controller('AppCtrl', function ($scope, applicationStateMgr) {
    $scope.name = 'AppCtrl'

        $scope.applicationStateMgr = applicationStateMgr;
//        $location.path('signin');

        $scope.go = function(){
            //$location.path('/main');
        };

        $scope.signIn = function(username){
            applicationStateMgr.manager.signInUser(username);
        }

        $scope.signOut = function(){
            applicationStateMgr.manager.signOutUser();

        };


//        $scope.toggleSignIn = function(){
//
//            if(!applicationStateMgr.manager.userIsSignedIn)
//            {
//                applicationStateMgr.manager.signInUser();
////                $location.path('/main');
////                console.log(applicationStateMgr);
//
//            }
//            else{
//                applicationStateMgr.manager.signOutUser();
////                $location.path('/signin');
//                console.log(applicationStateMgr);
//            }
//        }



})
;