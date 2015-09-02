'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dataToolApp'));

  var DashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope
       //place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
