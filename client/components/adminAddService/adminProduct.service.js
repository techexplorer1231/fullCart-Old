(function () {
  'use strict';
  angular
    .module('fullCartApp')
    .factory('AdminProduct', AdminProduct);

  /* @ngInject */
  function AdminProduct($resource) {
    return $resource('api/products/:productId',
      {productId: '@_id'},
      {update: {method: 'PUT'}}
    );
  }
})();
