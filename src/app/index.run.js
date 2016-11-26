(function() {
  'use strict';

  angular
    .module('eCommDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
