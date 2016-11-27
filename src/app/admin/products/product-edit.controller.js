(function() {
	'use strict';

	angular
		.module('sliderDirective.admin.product')
		.controller('ProductEditCtrl', ['$scope', '$location', '$stateParams', '$cacheFactory', 'ProductService', ProductDetailCtrl]);

	/** @ngInject */
	function ProductDetailCtrl($scope, $location, $stateParams, $cacheFactory, productService) {

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

    $scope.saveProduct = function(){
      productService.save($scope.product, function (response) {
        //console.log(response);
        $location.path("admin/products");
      });
    };

    $scope.addProduct = function(){
      console.log("addUser clicked.");
      if($scope.newUser && $scope.newUser.firstName && $scope.newUser.firstName !== ''){
        if($scope.newUser.id && $scope.newUser.id > 0){
          usersService.editUser($scope.newUser);
        }else{
          usersService.addUser($scope.newUser);
        }

        clearInputs();
      }
    };

    $scope.goBack = function(){
      $location.path("admin/products");
    };

    $scope.imgUrl = '';
    $scope.addImgUrl = function () {
      console.log($scope.imgUrl);
      if($scope.imgUrl && $scope.imgUrl != ''){
        $scope.product.images.push($scope.imgUrl);
        $scope.imgUrl = '';
      }
    };

    $scope.delUrl = function (index) {
      //if(index && index >= 0){
        $scope.product.images.splice(index, 1);
      //}
    };
	}

})();
