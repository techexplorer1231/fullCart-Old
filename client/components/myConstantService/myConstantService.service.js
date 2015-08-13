(function () {
  'use strict';
  angular
    .module('fullCartApp')
    .factory('myConstantService', myConstantService);

  /* @ngInject */
  function myConstantService() {
    var exports = {
      //For Category Admin
      getParentCategory: getParentCategory,
      getCategoryStatus: getCategoryStatus,
      //For brand admin
      getBrandStatus : getBrandStatus,
      //For product admin
      getCatalogOnlyStatus : getCatalogOnlyStatus,
      getRequiresShipping : getRequiresShipping,
      getProductStatus : getProductStatus,
      getStockStatus : getStockStatus,
      getTaxBand : getTaxBand
    };

    return exports;

    ////////////////

    //For Category Admin
    function getParentCategory() {
      var data = ['ELECTRONICS', 'MEN', 'WOMEN', 'BABY & KIDS'];
      return data;
    }

    function getCategoryStatus() {
      var data = [{'key':0, 'value':'Draft'}, {'key':1, 'value':'Live'}];
      return data;
    }

    //For brand admin
    function getBrandStatus() {
      var data = [{'key':0, 'value':'Draft'}, {'key':1, 'value':'Live'}];
      return data;
    }

    //For product admin
    function getCatalogOnlyStatus() {
      var data = [{'key':0, 'value':'No'}, {'key':1, 'value':'Yes'}];
      return data;
    }

    function getRequiresShipping() {
      var data = [{'key':0, 'value':'No'}, {'key':1, 'value':'Yes'}];
      return data;
    }

    function getProductStatus() {
      var data = [{'key':0, 'value':'Draft'}, {'key':1, 'value':'Live'}];
      return data;
    }

    function getStockStatus() {
      var data = [
        {'key': 0, 'value': 'Unlimited'},
        {'key': 1, 'value': 'In Stock'},
        {'key': 2, 'value': 'Low Stock'},
        {'key': 3, 'value': 'Out Of Stock'},
        {'key': 4, 'value': 'More Stock Ordered'},
        {'key': 5, 'value': 'Discontinued'}
      ];
      return data;
    }

    function getTaxBand() {
      var data = [{'key':0, 'value':'None'}, {'key':1, 'value':'Default'}];
      return data;
    }
  }
})();
