(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('cartAdminAddBrandController', cartAdminAddBrandController);

  /* @ngInject */
  function cartAdminAddBrandController(myConstantService, AddBrand) {
    var vm = this;
    vm.submit = submit;
    vm.brandStatus = myConstantService.getBrandStatus();

    function submit() {
      AddBrand.save(vm.brand);
    }
  }
})();
