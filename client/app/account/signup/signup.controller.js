'use strict';

angular.module('fullCartApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    /*$scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then(function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch(function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };*/
    var vm = this;
    vm.user = {};
    vm.submitSignup = submitSignup;
    vm.loginOauth = loginOauth;

    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    }
    function submitSignup() {
      Auth.createUser({
        name: vm.user.name,
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

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
