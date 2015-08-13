(function() {
  'use strict';

  angular
    .module('fullCartApp', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngMessages',
      'ngMaterial',
      'ngAnimate',
      'btford.socket-io',
      'ngAria',
      'ui.router',
      'angularFileUpload'
    ])
    .config(config)
    .run(run)
    .factory('authInterceptor', factory);
  /** @ngInject */
  function factory($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if (response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  }

  /** @ngInject */
  function run($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  }

  /** @ngInject */
  function config($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdIconProvider) {

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

    //set primary theme for the application
    $mdThemingProvider.theme('default')
      .primaryPalette('blue');

    //declare SVG icons to be used in application
    $mdIconProvider
      .icon('vertical-menu', '../assets/images/ic_more_vert_white_24px.svg', 24)
      .icon('not-favorite', '../assets/images/ic_turned_in_not_white_24px.svg', 24)
      .icon('favorite', '../assets/images/ic_turned_in_white_24px.svg', 24)
      .icon('menu', '../assets/images/ic_menu_white_24px.svg', 24)
      .icon('cart-empty', '../assets/images/ic_add_shopping_cart_white_24px.svg', 24)
      .icon('cart-fill', '../assets/images/ic_shopping_cart_white_24px.svg', 24);
  }

})();

