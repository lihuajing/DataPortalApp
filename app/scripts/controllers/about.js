'use strict';

/**
 * @ngdoc function
 * @name dataToolApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dataToolApp
 */
angular.module('dataToolApp')
    .controller('SiteCtrl', ['$scope', '$timeout',
        function ($scope) {
            $scope.sites = ['site1', 'site2', 'site3'];
            $scope.newSites=[];
            $scope.newSiteChange = function (index, newSite) {
                $scope.newSites[index] = newSite;
            };

            $scope.addSite = function () {
                $scope.newSiteItem = '';
                $scope.newSites.push($scope.newSiteItem);
            };

            $scope.removeSite = function (index) {
                $scope.sites.splice(index, 1);
            };

            $scope.removeNewSite = function (index) {
                $scope.newSites.splice(index, 1);
            };
        }
    ]);
