(function() {
  'use strict';

  angular
    .module('productsList', [])
    .directive('productsList', productsList);

    /** @ngInject */
  function productsList() {
	    var directive = {
	      restrict: 'E',
	      scope: {
	        title: '@',
	        products: '='
	      },
	      templateUrl: 'app/components/productsList/productsList.directive.html',
	      link: linkFunc,
	      controller: productsListController,
	      controllerAs: 'vm'
	    };

	    return directive;

	    function productsListController($scope) {
	    	var vm = this;
	    	vm.productsContainer = [];
	    	var tempContainer = [];
	    	while ($scope.products.length) {
			    vm.productsContainer.push($scope.products.splice(0, 4));
			}
	    }

	    function linkFunc(scope, el, attr) {
	    	$("a.carousel-control").click(function(e){
			    e.preventDefault();
			    $(this).parent().carousel($(this).data("slide"));
			});
	    }
	}

})();