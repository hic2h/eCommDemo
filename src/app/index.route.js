(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('productsDetail', {
        url: '/:id',
        templateUrl: 'app/productDetail/productDetail.html',
        controller: 'DetailProductController',
        controllerAs: 'productDetailCtrl'
      });

      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/auth/signup/sign-up.html',
        controller: 'SignupController',
        controllerAs: 'signupCtr'
      })
      .state('logout',
        {
          url : '/logout',
          controller : 'LogoutController',
          controllerAs : 'logoutCtr'
        });


    $urlRouterProvider.otherwise('/');
  }

})();
