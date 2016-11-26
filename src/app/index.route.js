(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', { //ui-sref='home'
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('singUp', {
        url: '/signUp',
        templateUrl: 'app/auth/signUp/sing-up.html',
        controller: 'SignUpController',
        controllerAs: 'singUpCtr'
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
