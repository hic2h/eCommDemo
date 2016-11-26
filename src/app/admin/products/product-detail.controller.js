(function() {
	'use strict';

	angular
		.module('sliderDirective.admin.product')
		.controller('ProductDetailCtrl', ['$scope', '$location', '$stateParams', 'ProductService', ProductDetailCtrl]);

	/** @ngInject */
	function ProductDetailCtrl($scope, $location, $stateParams, productService) {

		$scope.product = {};

		productService.getOne($stateParams.productId, function(product){
			$scope.product = product;
      if(product && product.category && product.category._id){
        $scope.product.category = product.category._id;
      }
		});

    productService.getAllCategories(function(categories) {
      $scope.allCategories = categories;
    });

    $scope.goBack = function(){
      $location.path("admin/products");
    };

	}

})();
