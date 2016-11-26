'use restrict'

angular.module('company')
  .factory('sessionInjector', ['SessionService', 'cookiesService', function (SessionService, cookiesService) {

      return {
          request : function(config){
              if(SessionService.isAuthenticated()) {
                config.headers.authorization = "Bearer " + cookiesService.token();
              }
            console.log('request ', config);
            return config;
          }
      }
}]);
