'use strict';

/**
 * @ngdoc directive
 * @name dataToolApp.directive:directive
 * @description
 * # directive
 */
angular.module('dataToolApp')
  .directive('directive', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the directive directive');
      }
    };
  });
