(function () {
  'use strict';

  angular
    .module('company')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $state, $cookies, LoginService) {

    var vm = this;

    $scope.login = function (company) {


        LoginService.auth(function(authToken){

          LoginService.accessByToken(function(auth){
            vm.auth = auth;
            if (vm.auth) {
              $state.go('home');
            }else{
              $state.go('login');
            }
          }, authToken)


        }, company.login, company.pwd);

      }
  }

})();
