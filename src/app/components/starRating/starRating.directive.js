(function() {
  'use strict';

  angular
    .module('productsList')
    .directive('starRating', starRating);

    /** @ngInject */
  function starRating() {
	    var directive = {
	      restrict: 'E',
	      scope: {
	        rating: '='
	      },
	      templateUrl: 'app/components/starRating/starRating.directive.html',
	      link: linkFunc,
	      controller: function($scope){
	      	$scope.getBlueStars = function(num) {
	      		var value = parseInt(num);
	      		if(value > 5) value = 5;
	      		if(value < 0) value = 0;
	      		return new Array(value); 
			};

			$scope.getEmptyStars = function(num) {
	      		var value = 5 - parseInt(num);
	      		if(value > 5) value = 5;
	      		if(value < 0) value = 0;
	      		return new Array(value); 
			};
	      }
	    };

	    return directive;

	    function linkFunc(scope, el, attr) {}
	}

})();