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
    function NavbarController(LoginService, $cookies) {
      var vm = this;

      vm.companyAccess = {
        connected : false
      }

      var getAccess = function() {
        var accessToken = $cookies.get('token');
        if (accessToken) {
          LoginService.accessByToken(function (companyAccess) {
            vm.companyAccess = companyAccess;
            vm.companyAccess.connected = true;
          }, accessToken);
        }
      };

      if (LoginService.hasToken()) {
          getAccess();
      }

    }
  }

})();
