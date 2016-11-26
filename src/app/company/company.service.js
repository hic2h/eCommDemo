'use strict';

angular.module('company').factory('CompanyService', ['AuthApi', function (AuthApi) {
  return {
    getAuthenticatedCompany : function(login, pwd) {
      return AuthApi.authenticate(login, pwd);
    }
  }
}]);
