(function () {
  'use strict';

  angular
    .module('company')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $state, LoginService, SessionService) {
    var vm = this;
    if (SessionService.isAuthenticated()) {
      $state.go('home');
    }
    $scope.login = function (auth) {
        LoginService.auth(auth.login, auth.pwd, function(company){
            SessionService.setCompany(company);
            if (SessionService.isAuthenticated()) {
              $state.go('home');
            }else{
              $state.go('login');
            }
        });
      }
  }

})();
