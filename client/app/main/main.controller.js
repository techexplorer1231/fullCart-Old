(function() {
  'use strict';

  angular
    .module('fullCartApp')
    .controller('MainController', MainController)
    .controller('LeftController', LeftController);

  /** @ngInject */
  function MainController($timeout, $mdSidenav, $mdUtil, $log) {
    var vm = this;
    vm.toggleLeft = buildToggler('left');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug('toggle ' + navID + ' is done');
          });
      }, 300);

      return debounceFn;
    }
  }

  /** @ngInject */
  function LeftController($timeout, $mdSidenav, $log) {
    var vm = this;

    vm.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug('close Left is done');
        });
    };
  }
})();
