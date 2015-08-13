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
                '<input aria-label=" " type="file" class="custom-file-input" id="customFileInputTarget" nv-file-select="" uploader="uploader" multiple>',
      link: {
        pre: preLink,
        post: postLink
      },
      restrict: 'A',
      scope: {}
    };
    return directive;

    function preLink(scope, element, attrs, controller) {
      console.log('Pre');
      scope.uploader = new FileUploader();
    }

    function postLink(scope, element, attrs, controller) {
      console.log('angularFileUpload', scope.uploader);

      var src = element.find($('#customFileInputSource'));
      var target = element.find($('#customFileInputTarget'));
      src.on('click', function(event) {
        event.preventDefault();
        target.trigger('click');
      });

      scope.$on('$destroy', function(event) {
        scope.$destroy();
      });
    }
  }
})();
