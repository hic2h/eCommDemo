(function () {
  'use strict';

  angular.module('company').controller('SignupController', controller);

  function controller($state, $scope, signupService, SessionService) {
    $scope.signup = function(company) {

        signupService.signup(company, function(company){
          console.log('company: ', company);
          SessionService.setCompany(company);
          $state.go('home');
        });
      }
  }

})();
