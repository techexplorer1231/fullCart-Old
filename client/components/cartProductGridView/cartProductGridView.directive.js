(function () {
  'use strict';

  angular
    .module('fullCartApp')
    .directive('cartProductGridView', cartProductGridView);

  /* @ngInject */
  function cartProductGridView() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      templateUrl: 'components/cartProductGridView/cartProductGridView.html',
      controller: CartProductGridViewController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs, controller) {

    }
  }

  /* @ngInject */
  function CartProductGridViewController() {
  }
})();
