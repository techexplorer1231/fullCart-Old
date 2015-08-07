(function() {
  'use strict';

  angular
    .module('fullCartApp')
    .directive('cpcSidebar', cpcSidebar);

  /** @ngInject */
  function cpcSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/cpcSidebar/cpcSidebar.html',
      controller: SidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController($mdUtil, $mdSidenav, $log) {
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
              $log.info('toggle ' + navID + ' is done');
            });
        }, 300);
        return debounceFn;
      }

      vm.close = function() {
        $log.debug('activate sidebar');
        $mdSidenav('left').close()
          .then(function () {
            $log.info('close LEFT is done');
          });
      };

    }
  }

})();
