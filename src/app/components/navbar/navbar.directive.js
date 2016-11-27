(function() {
  'use strict';

  angular
    .module('sliderDirective')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(SessionService, LoginService, $scope) {

      $scope.isLoaded = false;

      if (!SessionService.isAuthenticated() && SessionService.hasToken()) {

        LoginService.authByCookieToken(function (company) {
          SessionService.setCompany(company);
          $scope.isLoaded = true;
        });
      }else{
        $scope.isLoaded = true;
      }

      $scope.isAuthenticated = SessionService.isAuthenticated;
      $scope.isAnonymous = SessionService.isAnonymous;

    }
  }

})();
