'use restrict'

angular.module('company')
  .factory('cookiesService', ['$cookies', function ($cookies) {

      return {
        get : function (key) {
          return $cookies.get(key);
        },
        set : function (key, value) {
          $cookies.put(key, value);
        },
        remove : function(key) {
          $cookies.remove(key);
        },
        token : function(){
          return this.get('token');
        }
      }
}])
