'use strict';

angular.module('fullCartApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    /*$scope.user = {};
     $scope.errors = {};

     $scope.login = function(form) {
     $scope.submitted = true;

     if (form.$valid) {
     Auth.login({
     email: $scope.user.email,
     password: $scope.user.password
     })
     .then(function() {
     // Logged in, redirect to home
     $location.path('/');
     })
     .catch(function(err) {
     $scope.errors.other = err.message;
     });
     }
     };

     $scope.loginOauth = function(provider) {
     $window.location.href = '/auth/' + provider;
     };*/
    var vm = this;
    vm.user = {};
    vm.submitLogin = submitLogin;
    vm.loginOauth = loginOauth;
    vm.activate = activate;
    ////////////////////////////
    activate();
    /**
     * call this function on page load to clear cookie
     */
    function activate() {
      Auth.logout();
    }

    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    }
    function submitLogin() {
      Auth.login({
        email: vm.user.email,
        password: vm.user.password
      })
        .then(function () {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch(function (err) {
          vm.error = err.message;
        });
    }
  });
