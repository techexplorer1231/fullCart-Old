(function () {
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
    function SidebarController($mdUtil, $mdSidenav, $log, $state, Auth, myConstantService) {
      console.log('-----------------------------------');
      var vm = this;
      vm.toggleLeft = buildToggler('left');
      vm.navigateTo = navigateTo;
      vm.menu = myConstantService.getSidebarMenu();
      vm.admin = myConstantService.getSidebarAdminMenu();

      /**
       * navigate to respective states
       * @param {String} link string of state where to navigate
       */
      function navigateTo(link) {
        vm.toggleLeft('left');
        $state.go(link);
      }

      /**
       * fetch data for current logged in user and show the data
       */
      function activateSidebar() {
        vm.showChangePassword = false;
        Auth.isLoggedInAsync(function (is) {
          if (is) {
            /* User is logged in, do stuff with User */
            vm.isAdmin = Auth.isAdmin
            vm.getCurrentUser = Auth.getCurrentUser();
            vm.showChangePassword = true;
            $log.debug('cpcSidebar.directive.js', vm.getCurrentUser);
          } else {
            console.log('inside else', Auth.getCurrentUser());
            /* User is not logged in, can't access User */
            vm.isAdmin = null;
            vm.getCurrentUser = {};
          }
        });
      }

      /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
      function buildToggler(navID) {
        var debounceFn = $mdUtil.debounce(function () {
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug('cpcSidebar.directive.js- toggle ' + navID + ' is done');
              activateSidebar();
            });
        }, 300);
        return debounceFn;
      }
    }
  }

})();
