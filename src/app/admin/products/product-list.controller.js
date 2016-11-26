(function() {
	'use strict';

	angular
		.module('sliderDirective.admin.product')
		.controller('ProductListCtrl', ['$scope', '$location', '$cacheFactory', '$state', 'ProductService', ProductListCtrl]);

	/** @ngInject */
	function ProductListCtrl($scope, $location, $cacheFactory, $state, productService) {

    productService.getAll(function(products){
			$scope.products = products;
		});

		$scope.viewProduct = function(productId){
			$location.path("admin/products/" + productId);
		};

    $scope.editProduct = function(productId){
      $location.path("admin/products/edit/" + productId);
    };

    $scope.newProduct = function(){
      $state.go("product-add");
      //$location.path("admin/products/add");
    };

    $scope.deleteProduct = function(index, productId){
      console.log("deleteProduct : " + productId);
      if(index >= 0){
        usersService.deleteProduct(productId, function(users){
          $scope.users.splice(index, 1);
//				$scope.users = users;
        });
      }
    };

    $scope.filter = {text:'', category:''};
    /*for(product in $scope.products){
      $scope.filter.availableCategories.push(product.category);
    }*/

    productService.getAllCategories(function(categories){
      $scope.allCategories = categories;
      /*$scope.cache = $cacheFactory('AppCash');
      $scope.cache.put('allCategories', angular.isUndefined($scope.allCategories) ? null : $scope.allCategories);*/
    });

	}

})();
