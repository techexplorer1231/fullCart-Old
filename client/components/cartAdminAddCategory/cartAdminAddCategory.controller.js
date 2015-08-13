(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('CartAdminAddCategoryController', CartAdminAddCategoryController);

  /* @ngInject */
  function CartAdminAddCategoryController(myConstantService, AdminCategory) {
    var vm = this;
    vm.submit = submit;
    vm.categoriesStatus = myConstantService.getCategoryStatus();
    vm.parentCategories = myConstantService.getParentCategory();

    /*Add Category*/
    function submit() {
      AdminCategory.save(vm.category);
    }
  }
})();
