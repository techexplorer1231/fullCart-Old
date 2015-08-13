(function () {
  'use strict';
  angular
    .module('fullCartApp')
    .factory('AdminBrand', AdminBrand);

  /* @ngInject */
  function AdminBrand($resource) {
    return $resource('api/brands/:brandId',
      {brandId:'@_id'},
      {update: {method: 'PUT'}}
    );
  }
})();

