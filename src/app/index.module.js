(function() {
  'use strict';

  angular
    .module('sliderDirective', [
    	'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 
    	'ui.bootstrap', 'toastr', 'ngAnimate', 'productsList', 'sliderDirective.api', 'sliderDirective.admin.product']);

})();
