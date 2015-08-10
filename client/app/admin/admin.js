'use strict';

angular.module('fullCartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })
      .state('addProduct', {
        url: '/admin/add/product',
        templateUrl: 'components/cartAdminAddProduct/cartAdminAddProduct.html'
      })
  });
