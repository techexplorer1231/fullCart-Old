'use strict';

angular.module('fullCartApp')
  .factory('AddCategory', function ($resource) {
    return $resource('api/categories/:categoryId',
      {categoryId:'@_id'},
      {update: {method: 'PUT'}}
    );
  });
