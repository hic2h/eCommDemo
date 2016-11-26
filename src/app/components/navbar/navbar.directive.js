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
    function NavbarController(LoginService, SessionService,  $scope) {

      $scope.isAuthenticated = SessionService.isAuthenticated;

    }
  }

})();
