(function () {
  'use strict';
  angular
    .module('fullCartApp')
    .factory('myConstantService', myConstantService);

  /* @ngInject */
  function myConstantService() {
    var exports = {
      getParentCategory: getParentCategory,
      getCategoryStatus: getCategoryStatus
    };

    return exports;

    ////////////////

    function getParentCategory() {
      var data = ['ELECTRONICS', 'MEN', 'WOMEN', 'BABY & KIDS'];
      return data;
    }

    function getCategoryStatus() {
      var data = [{'key':0, 'value':'Draft'}, {'key':1, 'value':'Live'}];
      return data;
    }
  }
})();
