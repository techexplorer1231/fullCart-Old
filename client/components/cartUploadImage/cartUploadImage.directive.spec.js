'use strict';

describe('Directive: cartUploadImage', function () {

  // load the directive's module
  beforeEach(module('fullCartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cart-upload-image></cart-upload-image>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cartUploadImage directive');
  }));
});