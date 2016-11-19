(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
