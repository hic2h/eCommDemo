(function() {
	'use strict';

	angular
		.module('sliderDirective.admin.product')
		.controller('ProductAddCtrl', ['$scope', '$location', '$stateParams', '$cacheFactory', 'ProductService', ProductAddCtrl]);

	/** @ngInject */
	function ProductAddCtrl($scope, $location, $stateParams, $cacheFactory, productService) {

		$scope.product = {};

    productService.getAllCategories(function(categories) {
      $scope.allCategories = categories;
    });

    $scope.addProduct = function(){
      productService.add($scope.product, function (response) {
        //console.log(response);
        $location.path("admin/products");
      });
    };

    $scope.goBack = function(){
      $location.path("admin/products");
    };
	}

})();
