(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .directive('imgSlider', imgSlider);

    /** @ngInject */
  function imgSlider() {
		var directive = {
			restrict: 'E',
			scope: {
				imgs: '=',
				width: '@'
			},
			templateUrl: 'app/components/img-slider/img-slider.directive.html',
			link: linkFunc,
			controller: function($scope){
				
				$scope.imgUrls = function() {
					return new Array(imgs); 
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