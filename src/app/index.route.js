(function() {
  'use strict';

  angular
    .module('eCommDemo')
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

    $urlRouterProvider.otherwise('/');
  }

})();
