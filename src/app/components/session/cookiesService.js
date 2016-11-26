'use restrict'

angular.module('company')
  .factory('cookiesService', ['$cookies', function ($cookies) {

      return {
        cookies : function (key) {
          return $cookies.get(key);
        },
        token : function(){
          return this.cookies('token');
        }
      }

}])
