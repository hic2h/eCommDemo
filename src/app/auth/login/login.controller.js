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

    $scope.login = function (company) {


        LoginService.auth(company.login, company.pwd, function(authToken){

          LoginService.accessByToken(authToken, function(auth){
            vm.auth = auth;

            SessionService.setCompany(auth);
            console.log(SessionService.getCompany());

            if (vm.auth) {
              $state.go('home');
            }else{
              $state.go('login');
            }
          })


        } );

      }
  }

})();
