'use strict';

angular.module('company').factory('LoginService', ['$cookies', 'AuthApi', function ($cookies, AuthApi) {
  var auth = {};

  return {
    auth: function (cb, login, pwd) {

      var cookieToken = $cookies.get('token');

      if (cookieToken) {
          return cb(cookieToken);
      }else{
        return AuthApi.authenticate(login, pwd).success(function (response) {
          var token = response.token;

          $cookies.put('token', token);

          cb(token);
        });
      }
    },

    accessByToken : function(cb, token){
      return AuthApi.access(token).success(function(response){
        var access = response;

        cb(access);
      });
    },

    hasToken : function() {
      if ($cookies.get('token')) {
        return true;
      }else{
        return false;
      }
    }
  }
}]);
