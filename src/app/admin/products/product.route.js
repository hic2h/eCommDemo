(function() {
  'use strict';

angular
	.module('sliderDirective.admin.product')
	.config(routerConfig);

/** @ngInject */
function routerConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('product-list', {
			url: '/admin/products',
			templateUrl: 'app/admin/products/product-list.html',
			controller: 'ProductListCtrl'//,controllerAs: 'pListCtrl'
		})

    .state('product-add', {
      url: '/admin/products/add',
      templateUrl: 'app/admin/products/product-add.html',
      controller: 'ProductAddCtrl'
    })

		.state('product-details', {
			url: '/admin/products/:productId',
			templateUrl: 'app/admin/products/product-detail.html',
			controller: 'ProductDetailCtrl',
			controllerAs: 'pDetailsCtrl'
		})

    .state('product-edit', {
      url: '/admin/products/edit/:productId',
      templateUrl: 'app/admin/products/product-edit.html',
      controller: 'ProductEditCtrl'
    });

    //$urlRouterProvider.otherwise('/');
  }

})();
