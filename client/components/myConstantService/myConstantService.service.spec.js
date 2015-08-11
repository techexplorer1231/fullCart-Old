'use strict';

describe('Service: myConstantService', function () {

  // load the service's module
  beforeEach(module('fullCartApp'));

  // instantiate service
  var myConstantService;
  beforeEach(inject(function (_myConstantService_) {
    myConstantService = _myConstantService_;
  }));

  it('should do something', function () {
    expect(!!myConstantService).toBe(true);
  });

});
