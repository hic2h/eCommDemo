(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .directive('onOff', onOff);

  /** @ngInject */
  function onOff() {
    var directive = {
      restrict: 'E',
      scope: {
        value: '='
      },
      templateUrl: 'app/components/on-off/on-off.directive.html',
      link: linkFunc,
      controller: function($scope){

        $scope.isChecked = function(val) {
          console.log("isChecked : " + val);
          if(val && val == true){
            return true;
          }
          return false;
        };
      }
    };

    return directive;

    function linkFunc(scope, el, attr) {}
  }

})();
