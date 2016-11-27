(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .config(config)
    .run(function ($rootScope, $state, SessionService) {
      $rootScope.$on("$stateChangeStart", function(event, toState){
        if (toState.params.authorization && SessionService.isAnonymous()){
          // User isn’t authenticated
          $state.go("login");
          event.preventDefault();
        }
      });
    });

  /** @ngInject */
  function config($logProvider, toastrConfig, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $httpProvider.interceptors.push('sessionInjector');
  }

})();
