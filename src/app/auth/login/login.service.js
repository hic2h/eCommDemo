'use strict';

angular.module('company').factory('LoginService', ['cookiesService', 'AuthApi', function (cookiesService, AuthApi) {

  return {
    company: function (token, cb) {
      AuthApi.me(token).success(function (company) {
        cb(company);
      });
    },
    auth: function (login, pwd, cb) {
      var $this = this;
      AuthApi.auth(login, pwd).success(function (response) {
        $this.company(response.token, function (company) {
          cookiesService.set('token', response.token);
          cb(company);
        });
      });
    },
    authByToken: function (token, cb) {
      this.company(token, function (company) {
        cookiesService.set('token', token);
        cb(company);
      });
    }
  }
}]);
