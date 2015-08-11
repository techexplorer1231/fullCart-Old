'use strict';

angular.module('fullCartApp')
  .factory('AddBrand', function ($resource) {
    return $resource('api/brands/:brandId',
      {brandId:'@_id'},
      {update: {method: 'PUT'}}
    );
  });
