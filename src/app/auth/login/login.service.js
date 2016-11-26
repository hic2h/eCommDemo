'use strict';

angular.module('company').factory('LoginService', ['$cookies', 'AuthApi', function ($cookies, AuthApi) {

  return {
    auth: function (login, pwd, cb) {

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

    accessByToken : function(token, cb){
      return AuthApi.access(token).success(function(response){
        var access = response;

        cb(access);
      });
    }
  }
}]);
