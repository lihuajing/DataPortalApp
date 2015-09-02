'use strict';

/**
 * @ngdoc overview
 * @name dataToolApp
 * @description
 * # dataToolApp
 *
 * Main module of the application.
 */
angular
    .module('dataToolApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'gridster',
        'ui.bootstrap',
        'ui.sortable'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'DashboardCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('rootCtrl', ['$scope', '$modal', function ($scope, $modal) {
        $scope.form = {
            slogan: 'this is a data tool',
            uploadPic: 'yeoman.png',
            pageHead: 'DashBoard'
        };
        $scope.menus = ['about', 'contact', 'management'];
        $scope.changeHeight = function () {
            $scope.bodyHeight = document.body.clientHeight;
            $scope.winHeight = document.documentElement.clientHeight;
            $scope.containerHeight = {height: ($scope.bodyHeight > $scope.winHeight ? $scope.bodyHeight : $scope.winHeight) + 'px'};
            $scope.$apply();
        };
        window.onresize = $scope.changeHeight;
        window.onscroll = $scope.changeHeight;
        $scope.openSettings = function () {
            $scope.oldSlogan = $scope.form.slogan;
            $scope.oldUploadPic = $scope.form.uploadPic;
            $scope.oldPageHead = $scope.form.pageHead;
            $modal.open({
                scope: $scope,
                templateUrl: 'views/sloganSetting.html',
                controller: 'sloganSettingsCtrl'
            });
        };
        $scope.openMenu = function () {
            $scope.oldMenus = [];
            for (var i = 0; i < $scope.menus.length; i++) {
                $scope.oldMenus.push($scope.menus[i]);
            }
            $modal.open({
                scope: $scope,
                templateUrl: 'views/menuSetting.html',
                controller: 'menuSettingsCtrl'
            });
        };
    }])
    .controller('sloganSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance',
        function ($scope, $timeout, $rootScope, $modalInstance) {

            $scope.getPic = function (element) {
                $scope.form.uploadPic = element.files[0].name;
                $scope.$apply();
            };

            $scope.dismiss = function () {
                $scope.form.slogan = $scope.oldSlogan;
                $scope.form.uploadPic = $scope.oldUploadPic;
                $scope.form.pageHead = $scope.oldPageHead;
                $modalInstance.dismiss();
            };

            $scope.submit = function () {
                $modalInstance.close();
            };
        }
    ])
    .controller('menuSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance',
        function ($scope, $timeout, $rootScope, $modalInstance) {

            $scope.menuChange = function (index, menu) {
                $scope.menus[index] = menu;
            };

            $scope.addMenu = function () {
                $scope.menuItem = 'New Menu';
                $scope.menus.push($scope.menuItem);
            };

            $scope.removeItem = function (index) {
                $scope.menus.splice(index, 1);
            };

            $scope.clearMenu = function () {
                for (var i = $scope.menus.length; i > 0; i--) {
                    $scope.menus.splice(i - 1, 1);
                }
            };

            $scope.dismiss = function () {
                for (var i = $scope.menus.length; i > 0; i--) {
                    $scope.menus.splice(i - 1, 1);
                }
                for (var j = 0; j < $scope.oldMenus.length; j++) {
                    $scope.menus.push($scope.oldMenus[j]);
                }
                $modalInstance.dismiss();
            };

            $scope.submit = function () {
                $modalInstance.close();
            };
        }
    ]);
