"use strict";

angular.module('controllers-common', [])
    .controller('offCanvasCtrl', function ($scope, offCanvasStateMgr) {

//        $scope.effect = offCanvasStateMgr.sidebar.defaultTransitionEffect;

        $scope.offCanvasState = offCanvasStateMgr;

        $scope.toggleMenuState = function (command) {
//            $scope.appModel.sidebar.command = command;

            if(command === 'close'){

//                offCanvasStateMgr.sidebar.currentCssState = "reveal";
                offCanvasStateMgr.sidebar.isOpen = false;

                offCanvasStateMgr.content.currentCssState = '';

                $scope.offCanvasState = offCanvasStateMgr;

            }
            else {

                offCanvasStateMgr.sidebar.currentCssState = offCanvasStateMgr.sidebar.defaultTransitionEffect;
                offCanvasStateMgr.sidebar.isOpen = true;

                offCanvasStateMgr.content.currentCssState = offCanvasStateMgr.sidebar.defaultTransitionEffect + ' sidebar-open';

                $scope.offCanvasState = offCanvasStateMgr;

            }
        }



//
    });

