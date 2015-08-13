(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .directive('cartUploadImage', cartUploadImage);

  /* @ngInject */
  function cartUploadImage(FileUploader) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      template: '<md-button class="md-raised md-accent md-hue-1" id="customFileInputSource">Add Images</md-button>' +
                '<input aria-label=" " type="file" class="custom-file-input" id="customFileInputTarget" nv-file-select="" uploader="uploader">',
      link: {
        pre: preLink,
        post: postLink
      },
      restrict: 'A',
      scope: false
    };
    return directive;

    /**
     * pre link function to bind uploader for angular file upload
     * @param {object} scope
     * @param {object} element
     * @param {object} attrs
     * @param {object} controller
     */
    function preLink(scope, element, attrs, controller) {
      scope.uploader = new FileUploader();
    }

    /**
     * post link function to handle file upload
     * @param {object} scope
     * @param {object} element
     * @param {object} attrs
     * @param {object} controller
     */
    function postLink(scope, element, attrs, controller) {
      var src = element.find($('#customFileInputSource'));
      var target = element.find($('#customFileInputTarget'));
      src.on('click', function(event) {
        target.trigger('click');
      });

      scope.uploader = new FileUploader({
        url: '/api/images'
      });

      scope.submitData = function() {
        scope.uploader.uploadAll();
        console.info('uploader', scope.uploader);
      }

      // CALLBACKS

      scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
      };
      scope.uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
      };
      scope.uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
      };
      scope.uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
      };
      scope.uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
      };
      scope.uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
      };
      scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
      };
      scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
      };
      scope.uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
      };
      scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
      };
      scope.uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
      };

      console.info('uploader', scope.uploader);

      /**
       * destroy function on clearing directive
       */
      scope.$on('$destroy', function(event) {
        scope.$destroy();
      });
    }
  }
})();
