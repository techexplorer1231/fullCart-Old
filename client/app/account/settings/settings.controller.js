'use strict';

angular.module('fullCartApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $location) {
    var vm = this;
    vm.submitSettings = submitSettings;
    function submitSettings() {
      Auth.changePassword(vm.user.oldPassword, vm.user.newPassword)
        .then(function () {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch(function (err) {
          vm.signupForm.oldPassword.$setValidity('mongoose', false);
        });
    }
  });
