(function() {
  'use strict';

  angular
    .module('productsList')
    .directive('productItem', productItem);

    /** @ngInject */
  function productItem() {
	    var directive = {
	      restrict: 'E',
	      scope: {
	        product: '='
	      },
	      templateUrl: 'app/components/productItem/productItem.directive.html',
	      link: linkFunc,
	      controllerAs: 'vm'
	    };

	    return directive;

	    function linkFunc(scope, el, attr) {}
	}

})();