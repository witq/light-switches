'use strict';

describe('Directive: lightSwitch', function () {

  // load the directive's module
  beforeEach(module('lightSwitchesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<light-switch></light-switch>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lightSwitch directive');
  }));
});
