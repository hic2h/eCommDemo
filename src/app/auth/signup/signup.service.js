'use strict';

angular.module('company').factory('signupService', ['AuthApi','LoginService', function(AuthApi, LoginService){
    return {
      signup : function(company, cb){
        return AuthApi.signup(company).success(function(response){
          LoginService.authByToken(response.token, function(company){
            cb(company);
          });
        })
      }
    }
}]);
