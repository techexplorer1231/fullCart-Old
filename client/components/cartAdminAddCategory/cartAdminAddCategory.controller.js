(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('CartAdminAddCategoryController', CartAdminAddCategoryController);

  /* @ngInject */
  function CartAdminAddCategoryController(myConstantService, AdminCategory, FileUploader) {
    var vm = this;
    vm.submitCategory = submitCategory;
    vm.categoriesStatus = myConstantService.getCategoryStatus();
    vm.parentCategories = myConstantService.getParentCategory();

    var src = $('#customFileInputSource');
    var target = $('#customFileInputTarget');
    src.on('click', function(event) {
      event.preventDefault();
      target.trigger('click');
    });
    /*Add Category*/
    function submitCategory() {
      console.log('uploader', uploader);
    }

    /**
     * File upload Code
     */
    var uploader = vm.uploader = new FileUploader({
      url: '/ap/images'
    });

    // FILTERS

    uploader.filters.push({
      name: 'customFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        return this.queue.length < 10;
      }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
    };

    console.info('uploader', uploader);
  }
})();
