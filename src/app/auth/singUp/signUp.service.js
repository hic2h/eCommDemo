'use strict';

angular.module('company').factory('SignUpService', ['AuthApi', function(AuthApi){
    return {
      signUp : function(cb, newcompany){
        company = {
          "username": newcompany.username,
          "email": newcompany.email,
          "password": newcompany.password,
          "description": newcompany.description,
          "logo": newcompany.logo
        };
        return AuthApi.signUp(company).success(function(response){

        })
      }
    }
}]);
