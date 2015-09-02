'use strict';

/**
 * @ngdoc filter
 * @name dataToolApp.filter:filter
 * @function
 * @description
 * # filter
 * Filter in the dataToolApp.
 */
angular.module('dataToolApp')
  .filter('filter', function () {
    return function (input) {
      return 'filter filter: ' + input;
    };
  });
