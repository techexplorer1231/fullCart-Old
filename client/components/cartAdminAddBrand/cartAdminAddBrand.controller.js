(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('cartAdminAddBrandController', cartAdminAddBrandController);

  /* @ngInject */
  function cartAdminAddBrandController(myConstantService, AdminBrand) {
    var vm = this;
    vm.submit = submit;
    vm.brandStatus = myConstantService.getBrandStatus();

    function submit() {
      AdminBrand.save(vm.brand);
    }
  }
})();
