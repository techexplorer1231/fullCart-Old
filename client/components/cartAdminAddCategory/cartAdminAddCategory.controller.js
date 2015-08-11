(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('CartAdminAddCategoryController', CartAdminAddCategoryController);

  /* @ngInject */
  function CartAdminAddCategoryController(myConstantService, AddCategory) {
    var vm = this;
    vm.submit = submit;
    vm.categoriesStatus = myConstantService.getCategoryStatus();
    vm.parentCategories = myConstantService.getParentCategory();

    function submit() {
      AddCategory.save(vm.category);
    }
  }
})();
