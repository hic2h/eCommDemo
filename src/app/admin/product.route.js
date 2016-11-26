(function() {
  'use strict';

angular
	.module('sliderDirective.admin.product')
	.config(routerConfig);

/** @ngInject */
function routerConfig($stateProvider, $urlRouterProvider) {
	$stateProvider

    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/index.admin.html',
      abstract : true
    })

    .state('admin.index', {
      url: '',
      controller: ['$state', function ($state) {
        $state.go('admin.product-list');
      }],
      params:{authorization:true}
    })

		.state('admin.product-list', {
			url: '/products',
			templateUrl: 'app/admin/products/product-list.html',
			controller: 'ProductListCtrl',
      params:{authorization:true}
		})

    .state('admin.product-add', {
      url: '/products/add',
      templateUrl: 'app/admin/products/product-add.html',
      controller: 'ProductAddCtrl',
      params:{authorization:true}
    })

		.state('admin.product-details', {
			url: '/products/:productId',
			templateUrl: 'app/admin/products/product-detail.html',
			controller: 'ProductDetailCtrl',
			controllerAs: 'pDetailsCtrl',
      params:{authorization:true}
		})

    .state('admin.product-edit', {
      url: '/products/edit/:productId',
      templateUrl: 'app/admin/products/product-edit.html',
      controller: 'ProductEditCtrl',
      params:{authorization:true}
    });

    //$urlRouterProvider.otherwise('/');
  }

})();
