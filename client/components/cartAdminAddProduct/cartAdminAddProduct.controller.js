(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('CartAdminAddProductController', CartAdminAddProductController);

  /* @ngInject */
  function CartAdminAddProductController(AdminCategory, AdminBrand, AdminProduct, myConstantService) {
    var vm = this;
    vm.printValues = printValues;
    vm.loadCategories = loadCategories;
    vm.loadBrands = loadBrands;
    vm.submit = submit;
    vm.catalogOnlyStatus = myConstantService.getCatalogOnlyStatus();/**/
    vm.requiresShipping = myConstantService.getRequiresShipping();/**/
    vm.productStatus = myConstantService.getProductStatus();/**/
    vm.stockStatus = myConstantService.getStockStatus();
    vm.taxBand = myConstantService.getTaxBand();/**/

    vm.categories = [];
    vm.brands = [];

    function printValues() {
      console.log('vm.product', vm.product);
    }

    function loadCategories() {
      vm.categories = AdminCategory.query();
    }

    function loadBrands() {
      vm.brands = AdminBrand.query();
    }

    /*Add Category*/
    function submit() {
      console.log('vm.product', vm.product);
      AdminProduct.save(vm.product);
    }
  }
})();
