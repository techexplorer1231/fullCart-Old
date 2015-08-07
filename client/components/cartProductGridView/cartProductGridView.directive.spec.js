'use strict';

describe('Directive: cartProductGridView', function () {

  // load the directive's module and view
  beforeEach(module('fullCartApp'));
  beforeEach(module('components/cartProductGridView/cartProductGridView.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cart-product-grid-view></cart-product-grid-view>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the cartProductGridView directive');
  }));
});
