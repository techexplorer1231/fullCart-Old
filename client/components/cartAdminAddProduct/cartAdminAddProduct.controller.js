(function() {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('CartAdminAddProductController', CartAdminAddProductController);

  /* @ngInject */
  function CartAdminAddProductController() {
    var vm = this;
    vm.printValues = printValues;

    function printValues() {
      console.log('vm.product', vm.product);
    }
  }
})();
