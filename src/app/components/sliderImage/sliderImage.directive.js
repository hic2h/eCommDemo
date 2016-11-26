(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .directive('sliderImage', sliderImage);

    /** @ngInject */
  function sliderImage() {
	    var directive = {
	      restrict: 'E',
	      scope: {
	        images : '=',
	        urlImg: '@'
	      },
	      templateUrl: 'app/components/sliderImage/sliderImage.directive.html',
	      link: linkFunc,
	      controller: function($scope){
	      	$scope.selectImage = function(img) {  
	      		$scope.urlImg = img;
			};
	      }
	    };

	    return directive;

	    function linkFunc($scope, el, attr) {
	    }
	}

})();